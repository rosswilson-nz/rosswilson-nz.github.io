write_other_output_typ <- function(dta_other_output) {
  path <- fs::path(
    "site",
    "research",
    "other",
    make_article_stub(dta_other_output),
    "index.typ"
  )

  fs::dir_create(fs::path_dir(path))
  conn <- file(path, "w")
  writeLines(
    sprintf("#set document(title: [%s])", dta_other_output$title),
    conn
  )
  writeLines("", conn)
  writeLines("#metadata((", conn)
  date <- as.Date(dta_other_output$date)
  date_iso <- format(date, "%Y-%m-%d")
  date_fmt <- format(date, dta_other_output$date_fmt %||% "%d %B %Y")
  writeLines(sprintf("  date: \"%s\",", date_iso), conn)
  writeLines(sprintf("  date_fmt: \"%s\",", date_fmt), conn)
  writeLines(sprintf("  authors: \"%s\",", dta_other_output$authors), conn)
  writeLines(sprintf("  source: \"%s\",", dta_other_output$source), conn)
  writeLines(sprintf("  year: \"%s\",", dta_other_output$year), conn)
  if (!is.null(dta_other_output$doi)) {
    writeLines(sprintf("  doi: \"%s\",", dta_other_output$doi), conn)
  }
  writeLines(
    sprintf(
      "  citation: \"%s\",",
      format_other_citation(dta_other_output)
    ),
    conn
  )
  writeLines(
    c(
      ")) <website-metadata>",
      "",
      "Back to #link(\"/research.html#other-publications\")[publications]",
      ""
    ),
    conn
  )
  writeLines(sprintf("= %s", dta_other_output$title), conn)
  writeLines(sprintf("#smallcaps[Published]\\ %s", date_fmt), conn)
  writeLines("", conn)
  writeLines(
    sprintf(
      "#smallcaps[Citation]\\ #eval(\"%s\", mode: \"markup\")",
      format_other_citation(dta_other_output, FALSE)
    ),
    conn
  )
  writeLines(c("", "=== Abstract", dta_other_output$abstract), conn)
  close(conn)
  path
}

format_other_citation <- function(dta_other_output, link_title = TRUE) {
  stub <- make_article_stub(dta_other_output)

  title <- if (link_title) {
    sprintf(
      "#link(\"/research/other/%s/index.html\")[%s]",
      stub,
      dta_other_output$title
    )
  } else {
    dta_other_output$title
  }
  date <- as.Date(dta_other_output$date)
  date_fmt <- format(date, dta_other_output$date_fmt %||% "%d %B %Y")
  doi <- if (!is.null(dta_other_output$doi)) {
    sprintf(
      "doi:~#link(\"https://doi.org/%s\")[%s]",
      dta_other_output$doi,
      dta_other_output$doi
    )
  } else {
    ""
  }
  url <- if (doi == "" && !is.null(dta_other_output$url)) {
    sprintf("Available at: %s", dta_other_output$url)
  } else {
    ""
  }
  gsub2(
    sprintf(
      "%s. %s. %s, %s. %s%s",
      dta_other_output$authors,
      title,
      dta_other_output$source,
      date_fmt,
      doi,
      url
    ),
    "\"",
    "\\\"",
    fixed = TRUE
  )
}
