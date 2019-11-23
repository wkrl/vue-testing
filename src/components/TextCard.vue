<template>
  <div class="flex flex-col h-screen my-8 items-center bg-cover">
    <h1 class="text-xl font-semibold">TrainX mockup</h1>
    <div class="w-2/4 p-4 my-4 rounded overflow-visible shadow-lg text-center" @mouseup="checkEvent">
      <text-highlight 
        :queries="queries" 
        :baz="annotations"
        :highlightComponent="AnnotationInfoField"
        :caseSensitive="false"
      > {{ description }} </text-highlight>
    </div>
  </div>
</template>

<script>
import AnnotationInfoField from '@/components/AnnotationInfoField.vue'

export default {
    data() {
        return {
          AnnotationInfoField,
          selection: "", 
          queries: [],
          annotations: [
            {"corneal ectasia" : [
              "C0152194 Irregular astigmatism (Disease or Syndrome)",
              "C0339684 Irregular astigmatism - corneal  (Disease or Syndrome)",
              "C0339685 Irregular astigmatism - lenticular (Disease or Syndrome)",
              "C2881350 Irregular astigmatism of right eye (Disease or Syndrome)",
              "C2881351 Irregular astigmatism of left eye (Disease or Syndrome)",
              "C2881352 Irregular astigmatism, bilateral (Disease or Syndrome)",
              "C2881353 Irregular astigmatism, unspecified eye (Disease or Syndrome)",
              "C3840087 Postoperative irregular astigmatism (Disease or Syndrome)",
              "C4749264 Bilateral irregular astigmatism of eyes (Disease or Syndrome)"
            ]},
            {"corneal scarring" : [
              "C0349702 Corneal Scar (Finding)",
              "C0155098 Corneal scars and opacities (Acquired Abnormality)",
              "C1281917 Visually significant corneal scar (Acquired Abnormality)",
              "C1828318 Corneal subepithelial scar (Finding)",
              "C2064573 corneal scar of right eye (Finding)",
              "C2064574 corneal scar of left eye (Finding)",
              "C2064575 corneal scar of both eyes (Finding)",
              "C3515492 Removal of corneal scar tissue (Therapeutic or Preventive Procedure)"
            ]}
          ],
          description: "Nationwide reduction in the number of corneal transplantations for keratoconus following the implementation of cross-linking Keratoconus is characterized by corneal ectasia and irregular astigmatism, which can lead to diminished vision and corneal scarring. Approximately 10-20% of patients with keratoconus eventually require a corneal transplant. Corneal cross-linking (CXL) is a relatively new treatment that may help prevent the need for corneal transplantation. Here, we investigated whether the introduction of CXL has reduced the number of corneal transplants performed annually. Data regarding the transplantation procedures performed in patients under the age of 50 years were extracted from the Dutch National Organ Transplant Registry. The number of corneal transplants performed prior to (i.e. in 2005 through 2007) and following the introduction of CXL (i.e. in 2012 through 2014) were compared. Furthermore, a trend analysis on annual keratoplasties over time was performed. Approximately 25% fewer corneal transplants were performed in the 3- year period following the introduction of CXL compared to the 3- year period prior to the introduction of CXL (201 versus 269 transplants, respectively; p = 0.005). Age, gender and visual acuity were similar between the patient groups in the two time periods. Trend analysis also demonstrated a significant decrease in the amount of corneal transplants (p = 0.001). Significantly fewer corneal transplants were performed for treating keratoconus following the nationwide introduction of CXL. This reduction suggests that corneal cross-linking can significantly reduce the need for corneal transplantation." 
        }
    },
    methods: {
      checkEvent(e) {
        if (e.target.nodeName === "SPAN") this.updateSelection()
      },
      updateSelection() { 
        this.selection = ""
        this.selection = window.getSelection().toString()
        
        // check if match with annotations exists
        this.getAnnotationMatch()
      },
      checkSelection() {
        let text = this.selection.toString()
        return text && text !== " " 
      },
      getAnnotationMatch() {
        this.queries = []
        if (this.checkSelection()) {
          for (let obj of this.annotations) {
            for (let annotation of Object.keys(obj)) {
              if (annotation === this.selection) this.queries.push(annotation)
              for (let word of annotation.split(" ")) {
                if (word === this.selection) this.queries.push(annotation)
              }
            }
          }
        }
      }
    },
}
</script>
