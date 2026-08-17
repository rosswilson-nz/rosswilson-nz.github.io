#set document(title: [Predictive models for identifying hip and knee osteoarthritis in primary care electronic records: a natural language processing text classifier approach])

#metadata((
  description: "#link(\"/research/presentation/oarsi-2024-predictive-models-for/index.html\")[Predictive models for identifying hip and knee osteoarthritis in primary care electronic records: a natural language processing text classifier approach]. _OARSI World Congress_. Vienna, August 2024",
  date: "2024-08-18",
  date_fmt: "August 2024",
  location: "Vienna",
  note: "poster presentation",
  doi: "10.1016/j.joca.2024.02.106",
)) <website-metadata>

Back to #link("/research.html#presentations")[presentations]

= Predictive models for identifying hip and knee osteoarthritis in primary care electronic records: a natural language processing text classifier approach
== OARSI World Congress, Vienna
#smallcaps[Date]\ August 2024

#smallcaps[Citation]\ #eval("MacRae J, Darlow B, Dowell T, Stephenson C, Oscroft N, Wilson R, Abbott JH. Predictive models for identifying hip and knee osteoarthritis in primary care electronic records: a natural language processing text classifier approach. _Osteoarthritis Cartilage_ 2024;32(S1):S529. doi:~#link(\"https://doi.org/10.1016/j.joca.2024.02.106\")[10.1016/j.joca.2024.02.106]", mode: "markup")

=== Abstract
*Purpose (the aim of the study)*
Osteoarthritis (OA) is a common condition affecting the hip and knee, and
its accurate identification in populations is crucial for research and
healthcare planning. This study aimed to apply Natural Language Processing
(NLP) technology to identify, in primary care electronic health records
(EHRs), diagnostic criteria that indicate probable cases of knee or hip OA.
We hypothesized that a NLP text classifier algorithm could be developed to
identify the key signs and symptoms of hip or kneeosteoarthritis (OA) from
clinical narrative and coded data, and assign patients to a binary
classification of either having OA or not. We compared the performance of
different prediction models.

*Methods*
We accessed clinical records through a Primary Healthcare Organisation
(PHO) in the lower North Island of Aotearoa New Zealand (NZ). 31 primary
care practices consented access to deidentified EHR data.

To develop the text classifier algorithm, two general medical practitioner
(GP) clinical experts (coders) independently reviewed the longitudinal EHRs
of 100 randomly-selected patients for signs and symptoms according to the
ACR, EULAR or NICE clinical diagnostic criteria hip or knee OA. Using these
coded case records, we trained and evaluated a NLP text classifier in an
additional 1,579 patients. Bootstrapping with 1,000 replicates was used to
generate samples for analysis.

We evaluated the accuracy of four prediction models; 'single-keyword',
'simple-keyword', 'text-classifier' and 'Read code', and report
sensitivity, specificity, positive predictive value (PPV), negative
predictive value (NPV), and Matthews correlation metrics of model
performance.

*Results*
Usage-related joint pain was the most commonly identified diagnostic
criterion (Figure). Most diagnostic signs and symptoms appeared rarely in
the EHR narrative text, which posed challenges for specifying text
classifier models or accurately identifying OA cases; combining the text
classifiers for signs and symptoms we were not able to identify OA
according to any of the classification criteria. The text classifier had
lower sensitivity and NPV compared to the single keyword and simple keyword
models.

All of the models we evaluated were relatively insensitive, and thus risk
missing 20 to 30% of hip OA cases and 5 to 60% of knee OA cases. We found
Read-coded OA in slightly higher prevalence to GP identified OA. The PPV
and specificity of the Read code-based approach were both 1.000 (95% CI
1.000-1.000) – indicating that when a relevant OA Read code was present,
the coders consistently identified the record as having OA - the NPV for
the Read code-based model (0.940; 95% CI 0.884 to 0.988 for hip OA and
0.935; 95% CI 0.879 to 0.978 for knee OA) was consistently higher that of
the text-classifier approach (0.925; 95% CI 0.865 to 0.976 for hip OA and
0.902; 95% CI 0.837 to 0.955 for knee OA), indicating lower prevalence of
text-classifier identified OA than Read code identified OA within the
cohort, and lower utility for identifiying people who do not have OA.

We found an approach using Read codes augmented with additional brief
free-text annotations provided the highest performance in identifying hip
and knee OA cases, at a rate of.17 (95% CI.11 -.25) for hip OA and 0.16
(95% CI 0.9 - 0.23) for knee OA.

*Conclusions*
Specifying a text-classifier algorithm using NLP for identifying patients
with hip or knee OA was not feasible. The text-classifier approach had
limitations in accurately classifying OA cases due to insufficient
recording, in EHRs, of signs and symptoms necessary for inferring OA
diagnoses according to classification criteria. Using Read codes plus
free-text annotations was more effective than relying on clinical narrative
data. These results imply that the current internationally endorsed
diagnostic formulations of OA are either not the primary framework in which
GPs identify or manage OA, or if so the findings are not recorded in the
EHR. Diagnosis, coding, and the primary care framework of care are complex
with interacting drivers of behaviour. These findings have implications for
educational and training paradigms for both secondary and primary care, as
well as for informing resource allocation issues.

