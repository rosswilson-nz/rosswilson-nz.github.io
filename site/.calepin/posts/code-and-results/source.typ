#import "/.calepin/calepin.typ" as calepin_runtime
#import "/.calepin/calepin.typ" as calepin

#set document(title: [Code And Results])
#metadata((
  title: "Code And Results",
  translation_key: "code-and-results",
  kind: "post",
  date: "2026-06-09",
  tags: ("code", "notebook"),
  summary: "A post with executable code output for checking notebook styling.",
)) <website-metadata>

#calepin.setup(
  echo: true,
  eval: true,
  results: "verbatim",
  fenced-chunks: true,
)

#title()

#lorem(50)

#calepin_runtime.chunk_from_raw_plain("python", raw("numbers = [2, 4, 6, 8]\nprint(sum(numbers) / len(numbers))\n", block: true, lang: "python"))

#lorem(70)
