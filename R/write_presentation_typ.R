write_presentation_typ <- function(dta_presentation) {
  path <- fs::path(
    "site",
    "research",
    "presentation",
    make_presentation_stub(dta_presentation),
    "index.typ"
  )
  date <- as.Date(dta_presentation$date)
  date_iso <- format(date, "%Y-%m-%d")
  date_fmt <- format(date, dta_presentation$date_fmt %||% "%B %Y")
  description <- format_presentation_citation(dta_presentation)
  citation <- if (!is.null(dta_presentation$authors)) {
    gsub2(
      sprintf(
        "%s. %s. %s%s",
        dta_presentation$authors,
        dta_presentation$title,
        if (!is.null(dta_presentation$published)) {
          sprintf("%s.", dta_presentation$published)
        } else {
          ""
        },
        if (!is.null(dta_presentation$doi)) {
          sprintf(
            ' doi:~#link(\"https://doi.org/%s\")[%s]',
            dta_presentation$doi,
            dta_presentation$doi
          )
        } else {
          ""
        }
      ),
      "\"",
      "\\\"",
      fixed = TRUE
    )
  }
  fs::dir_create(fs::path_dir(path))
  text <- c(
    sprintf("#set document(title: [%s])\n", dta_presentation$title),
    "#metadata((",
    sprintf('  description: "%s",', description),
    sprintf('  date: "%s",', date_iso),
    sprintf('  date_fmt: "%s",', date_fmt),
    sprintf('  location: "%s",', dta_presentation$location),
    if (!is.null(dta_presentation$note)) {
      sprintf('  note: "%s",', dta_presentation$note)
    },
    if (!is.null(dta_presentation$doi)) {
      sprintf('  doi: "%s",', dta_presentation$doi)
    },
    ")) <website-metadata>\n",
    'Back to #link("/research.html#presentations")[presentations]\n',
    sprintf("= %s", dta_presentation$title),
    sprintf(
      "== %s, %s",
      dta_presentation$conference,
      dta_presentation$location
    ),
    sprintf("#smallcaps[Date]\\ %s\n", date_fmt),
    if (!is.null(citation)) {
      sprintf(
        '#smallcaps[Citation]\\ #eval("%s", mode: "markup")',
        citation
      )
    },
    if (!is.null(dta_presentation$abstract)) {
      c("\n=== Abstract", dta_presentation$abstract)
    }
  )
  writeLines(text, path)
  path
}

make_presentation_stub <- function(dta_presentation) {
  date <- as.Date(dta_presentation$date)
  year <- format(date, "%Y")
  shorttitle <- paste(
    tolower(gsub2(
      strsplit(dta_presentation$title, "\\s")[[1]][1:3],
      "\\h",
      "-"
    )),
    collapse = "-"
  )
  sprintf("%s-%s-%s", dta_presentation$stub, year, shorttitle)
}

format_presentation_citation <- function(dta_presentation) {
  date <- as.Date(dta_presentation$date)
  date_fmt <- format(date, dta_presentation$date_fmt %||% "%B %Y")
  stub <- make_presentation_stub(dta_presentation)
  title <- if (!is.null(dta_presentation$abstract)) {
    sprintf(
      "#link(\"/research/presentation/%s/index.html\")[%s]",
      stub,
      dta_presentation$title
    )
  } else {
    dta_presentation$title
  }
  gsub2(
    sprintf(
      "%s. _%s_. %s, %s",
      title,
      dta_presentation$conference,
      dta_presentation$location,
      date_fmt
    ),
    "\"",
    "\\\"",
    fixed = TRUE
  )
}
