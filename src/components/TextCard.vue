<template>
  <div class="flex flex-col h-screen my-8 items-center bg-cover">
    <h1 class="text-xl font-semibold">TrainX mockup</h1>
    <div class="w-2/4 p-4 my-4 rounded overflow-hidden shadow-lg text-center" @mouseup="updateSelection">
      <text-highlight :queries="selection">{{ description }}</text-highlight>
    </div>
    <div class="w-auto p-4 my-4 rounded shadow-lg text-center">
      {{ checkSelection() ? "Selected text: " + selection : "Select text"}}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          selection: "", 
          queries: ["corneal ectasia", "corneal scarring"],
          description: "Nationwide reduction in the number of corneal transplantations for keratoconus following the implementation of cross-linking Keratoconus is characterized by corneal ectasia and irregular astigmatism, which can lead to diminished vision and corneal scarring. Approximately 10-20% of patients with keratoconus eventually require a corneal transplant. Corneal cross-linking (CXL) is a relatively new treatment that may help prevent the need for corneal transplantation. Here, we investigated whether the introduction of CXL has reduced the number of corneal transplants performed annually. Data regarding the transplantation procedures performed in patients under the age of 50 years were extracted from the Dutch National Organ Transplant Registry. The number of corneal transplants performed prior to (i.e. in 2005 through 2007) and following the introduction of CXL (i.e. in 2012 through 2014) were compared. Furthermore, a trend analysis on annual keratoplasties over time was performed. Approximately 25% fewer corneal transplants were performed in the 3- year period following the introduction of CXL compared to the 3- year period prior to the introduction of CXL (201 versus 269 transplants, respectively; p = 0.005). Age, gender and visual acuity were similar between the patient groups in the two time periods. Trend analysis also demonstrated a significant decrease in the amount of corneal transplants (p = 0.001). Significantly fewer corneal transplants were performed for treating keratoconus following the nationwide introduction of CXL. This reduction suggests that corneal cross-linking can significantly reduce the need for corneal transplantation." 
        }
    },
    methods: {
      updateSelection() { 
        this.selection = ""
        this.selection = window.getSelection().toString()
      },
      checkSelection() {
        let text = this.selection.toString()
        return text && text !== " " 
      },
    }
}
</script>