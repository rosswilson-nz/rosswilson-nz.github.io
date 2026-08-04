format_article_citation <- function(dta_article, link_title = TRUE) {
  stub <- make_article_stub(dta_article)
  title <- if (link_title) {
    sprintf(
      "#link(\"/research/article/%s/index.html\")[%s]",
      stub,
      dta_article$title
    )
  } else {
    dta_article$title
  }
  issue <- if (!is.null(dta_article$issue)) {
    sprintf("(%s)", dta_article$issue)
  } else {
    ""
  }
  pages <- if (!is.null(dta_article$pages)) {
    sprintf(":%s", dta_article$pages)
  } else {
    ""
  }
  doi <- if (!is.null(dta_article$doi)) {
    sprintf(
      " doi: #link(\"https://doi.org/%s\")[%s]",
      dta_article$doi,
      dta_article$doi
    )
  } else {
    ""
  }
  gsub2(
    sprintf(
      "%s. %s. _%s_ %s;%s%s%s.%s",
      dta_article$authors,
      title,
      dta_article$journal,
      dta_article$year,
      dta_article$volume,
      issue,
      pages,
      doi
    ),
    "\"",
    "\\\"",
    fixed = TRUE
  )
}

make_article_stub <- function(dta_article) {
  if (is.null(dta_article$doi)) {
    author <- strsplit(dta_article$author, "\\s")[[1]][[1]]
    shorttitle <- paste(
      tolower(gsub2(strsplit(dta_article$title, "\\s")[[1]][1:3], "\\h", "-")),
      collapse = "-"
    )
    sprintf("%s-%s-%s", author, dta_article$year, shorttitle)
  } else {
    dta_article$doi
  }
}
