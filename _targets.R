# Created by use_targets().
# Follow the comments below to fill in this target script.
# Then follow the manual to check and run the pipeline:
#   https://books.ropensci.org/targets/walkthrough.html#inspect-the-pipeline

# Load packages required to define the pipeline:
library(targets)
library(tarchetypes) # Load other packages as needed.

# Set target options:
tar_option_set(
  packages = c("fastverse", "stringx"), # Packages that your targets need for their tasks.
  format = "qs", # Optionally set the default storage format. qs is fast.
  #
  # Pipelines that take a long time to run may benefit from
  # optional distributed computing. To use this capability
  # in tar_make(), supply a {crew} controller
  # as discussed at https://books.ropensci.org/targets/crew.html.
  # Choose a controller that suits your needs. For example, the following
  # sets a controller that scales up to a maximum of two workers
  # which run as local R processes. Each worker launches when there is work
  # to do and exits if 60 seconds pass with no tasks to run.
  #
  controller = crew::crew_controller_local(workers = 2, seconds_idle = 60)
  #
  # Alternatively, if you want workers to run on a high-performance computing
  # cluster, select a controller from the {crew.cluster} package.
  # For the cloud, see plugin packages like {crew.aws.batch}.
  # The following example is a controller for Sun Grid Engine (SGE).
  #
  #   controller = crew.cluster::crew_controller_sge(
  #     # Number of workers that the pipeline can scale up to:
  #     workers = 10,
  #     # It is recommended to set an idle time so workers can shut themselves
  #     # down if they are not running tasks.
  #     seconds_idle = 120,
  #     # Many clusters install R as an environment module, and you can load it
  #     # with the script_lines argument. To select a specific verison of R,
  #     # you may need to include a version string, e.g. "module load R/4.3.2".
  #     # Check with your system administrator if you are unsure.
  #     script_lines = "module load R"
  #   )
  #
  # Set other options as needed.
)

# Run the R scripts in the R/ folder with your custom functions:
tar_source()
# tar_source("other_functions.R") # Source other scripts as needed.

# Target list: ----
list(
  ## Journal articles ----
  tar_file(file_articles, "data/articles.yaml"),
  tar_target(dta_articles, yaml::read_yaml(file_articles), iteration = "list"),
  tar_target(
    res_citation_article,
    sapply(dta_articles, format_article_citation)
  ),
  tar_file(
    file_article,
    write_article_typ(dta_articles),
    pattern = map(dta_articles),
  ),
  ## Other publications/outputs ----
  tar_file(file_other_outputs, "data/other-outputs.yaml"),
  tar_target(
    dta_other_outputs,
    yaml::read_yaml(file_other_outputs),
    iteration = "list"
  ),
  tar_file(
    file_other_output,
    write_other_output_typ(dta_other_outputs),
    pattern = map(dta_other_outputs),
  ),
  ## Presentations ----
  tar_file(file_presentations, "data/presentations.yaml"),
  tar_target(
    dta_presentations,
    yaml::read_yaml(file_presentations),
    iteration = "list"
  ),
  tar_file(
    file_presentation,
    write_presentation_typ(dta_presentations),
    pattern = map(dta_presentations),
  )
)
