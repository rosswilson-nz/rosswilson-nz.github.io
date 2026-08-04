write_article_typ <- function(dta_article) {
  path <- fs::path(
    "site",
    "research",
    "article",
    make_article_stub(dta_article),
    "index.typ"
  )
  fs::dir_create(fs::path_dir(path))
  conn <- file(path, "w")
  writeLines(sprintf("#set document(title: [%s])", dta_article$title), conn)
  writeLines("", conn)
  writeLines("#metadata((", conn)
  date <- as.Date(dta_article$date)
  date_iso <- format(date, "%Y-%m-%d")
  date_fmt <- format(date, dta_article$date_fmt %||% "%d %B %Y")
  writeLines(sprintf("  date: \"%s\",", date_iso), conn)
  writeLines(sprintf("  date_fmt: \"%s\",", date_fmt), conn)
  writeLines(sprintf("  authors: \"%s\",", dta_article$authors), conn)
  writeLines(sprintf("  journal: \"%s\",", dta_article$journal), conn)
  writeLines(sprintf("  year: \"%s\",", dta_article$year), conn)
  writeLines(sprintf("  volume: \"%s\",", dta_article$volume), conn)
  if (!is.null(dta_article$issue)) {
    writeLines(sprintf("  issue: \"%s\",", dta_article$issue), conn)
  }
  if (!is.null(dta_article$pages)) {
    writeLines(sprintf("  pages: \"%s\",", dta_article$pages), conn)
  }
  if (!is.null(dta_article$doi)) {
    writeLines(sprintf("  doi: \"%s\",", dta_article$doi), conn)
  }
  writeLines(
    sprintf("  citation: \"%s\",", format_article_citation(dta_article)),
    conn
  )
  writeLines(
    c(
      ")) <website-metadata>",
      "",
      "Back to #link(\"/research.html/journal-articles\")[publications]",
      ""
    ),
    conn
  )
  writeLines(sprintf("= %s", dta_article$title), conn)
  writeLines(sprintf("== %s", dta_article$journal), conn)
  writeLines(sprintf("#smallcaps[Published]\\ %s", date_fmt), conn)
  writeLines("", conn)
  writeLines(
    sprintf(
      "#smallcaps[Citation]\\ #eval(\"%s\", mode: \"markup\")",
      format_article_citation(dta_article, FALSE)
    ),
    conn
  )
  writeLines(c("", "=== Abstract", dta_article$abstract), conn)
  close(conn)
  path
}
