#import "/.calepin/calepin.typ" as calepin

#set document(title: [Ross Wilson])
#metadata((title: "Home")) <website-metadata>

#calepin.setup(
  echo: true,
  eval: true,
  results: "verbatim",
  fenced-chunks: true,
)

#let target = sys.inputs.at("calepin-target", default: "paged")

#show: body => {
  if target == "html" {
    body
  } else {
    set page(columns: 2)
    body
  }
}


#title()

#if target == "html" {
  html.elem("img", "", attrs: (
    class: "calepin-float-right calepin-scaffold-portrait",
    src: "assets/profile.jpg",
    alt: "Portrait photograph",
    width: "1280",
    height: "1920",
    loading: "lazy",
    decoding: "async",
  ))
} else {
  place(
    top + right,
    float: true,
    clearance: 1em,
    image("/assets/profile.jpg", width: 32%),
  )
}

I am a Senior Research Fellow in the #link("https://uo-cmor.github.io")[Centre for Musculoskeletal
  Outcomes Research] at the Department of Surgery and Critical Care, University of Otago.

My research area is health economics, with a specific focus on the measurement and valuation of
health-related quality of life, economic evaluation of healthcare interventions, and simulation
modelling of disease epidemiology and treatment to inform health policy.

Further details on my research interests and publications can be found under the #link(
  "/research.html",
)[Research] tab above.

I can be reached at #link("mailto:ross.wilson@otago.ac.nz").
