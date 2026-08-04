write_other_output_typ <- function(dta_other_outputs) {
  dta_other_outputs$year <- year(dta_other_outputs$date)
  txt <- glue::glue_data(
    dta_other_outputs,
    other_output_typst_template(),
    date_fmt = format(date, "%d %B %Y"),
    citation_meta = format_other_citation(dta_other_outputs, TRUE),
    citation = format_other_citation(dta_other_outputs)
  )
  path <- fs::path(
    "site",
    "research",
    "other",
    make_stub(dta_other_outputs),
    "index.typ"
  )
  fs::dir_create(fs::path_dir(path))
  writeLines(txt, path)
  path
}

format_other_citation <- function(dta_other_outputs, link_title = FALSE) {
  stub <- make_stub(dta_other_outputs)
  glue::glue_data(
    dta_other_outputs,
    "{authors}. {title}. {date}; {source}{doi}",
    title = if (link_title) {
      glue::glue("#link(\"/research/other/{stub}/index.html\")[{title}]")
    } else {
      glue::glue(title)
    },
    doi = iif(
      doi == "",
      glue::glue(NA, .na = NULL),
      glue::glue(", doi:#link(\"https://doi.org/{doi}\")[{doi}]")
    ),
    date = format(date, "%d %B %Y"),
    .na = ""
  ) %>%
    stri_replace_all_fixed("\"", "\\\"")
}

other_output_typst_template <- function() {
  '#set document(title: [{title}])

#metadata((
  date: "{date}",
  date_fmt: "{date_fmt}",
  authors: "{authors}",
  doi: "{doi}",
  citation: "{citation_meta}",
)) <website-metadata>

Back to #link("/research.html#other-publications")[publications]

= {title}
#smallcaps[Published]\\ {date_fmt}

#smallcaps[Citation]\\ #eval("{citation}", mode: "markup")

=== Abstract
{abstract}'
}
