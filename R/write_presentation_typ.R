write_presentation_typ <- function(dta_presentations) {
  dta_presentations$year <- year(dta_presentations$date)
  txt <- glue::glue_data(
    dta_presentations,
    presentation_typst_template(),
    date_fmt = format(date, "%d %B %Y"),
    citation_meta = format_presentation_meta(dta_presentations),
    citation = format_presentation_citation(dta_presentations)
  )
  path <- fs::path(
    "site",
    "research",
    "presentation",
    make_stub(dta_presentations),
    "index.typ"
  )
  fs::dir_create(fs::path_dir(path))
  writeLines(txt, path)
  path
}

format_presentation_meta <- function(dta_presentations, link_title = TRUE) {
  stub <- make_presentation_stub(dta_presentations)
  glue::glue_data(
    dta_presentations,
    "{title}. {conference}. {location}, {date}{note}",
    title = if (link_title) {
      glue::glue(
        "#link(\"/research/presentation/{stub}/index.html\")[{title}]"
      )
    } else {
      glue::glue(title)
    },
    date = format(date, "%B %Y"),
    note = iif(note != "", glue::glue(" [{note}]"), glue::glue("")),
    .na = ""
  ) %>%
    stri_replace_all_fixed("\"", "\\\"")
}

format_presentation_citation <- function(dta_presentations) {
  iif(
    dta_presentations$citation != "",
    glue::glue_data(
      dta_presentations,
      "{citation}.{doi}",
      doi = iif(
        doi == "",
        glue::glue(NA, .na = NULL),
        glue::glue(" doi:#link(\"https://doi.org/{doi}\")[{doi}]")
      ),
      .na = ""
    ),
    format_presentation_meta(dta_presentations, FALSE)
  )
}

make_presentation_stub <- function(dta_presentations) {
  glue::glue_data(
    dta_presentations,
    "{stub}-{year}-{shorttitle}",
    year = year(date),
    shorttitle = stringr::str_replace_all(
      stringr::word(title, end = 3),
      "\\h",
      "-"
    )
  )
}

presentation_typst_template <- function() {
  '#set document(title: [{title}])

#metadata((
  date: "{date}",
  date_fmt: "{date_fmt}",
  authors: "{authors}",
  doi: "{doi}",
  citation: "{citation_meta}",
)) <website-metadata>

Back to #link("/research.html#presentations")[publications]

= {title}
#smallcaps[Date]\\ {date_fmt}

#smallcaps[Citation]\\ #eval("{citation}", mode: "markup")

=== Abstract
{abstract}'
}
