<template>
	<mark 
	@mouseover="hover = true"
    @mouseleave="hover = false"
	class="tooltip"
	>
		<slot></slot>
		<div 
			v-if="hover"
			class="tooltiptext"
		>
			<ul>
				<li v-for="item in getInfoList()" :key="item">
					{{refactorItem(item)}} 
				</li>
			</ul>
		</div>
	</mark>
</template>

<script>
export default {
	data() {
		return {
			hover: false, 
		}
	},
	props: {
    baz: String, // From OtherComponent.vue
    index: Number, // From TextHighlight
    text: String, // From TextHighlight, equals to `this.$slots.default[0].text`
	},
	methods: {
		getInfoList() {
			for (let obj of this.baz) {
				if (Object.keys(obj)[0] === this.text) {
					return Object.values(obj)[0]
				}
			}
		},
		refactorItem(item) {
			// find type and change string 
			// e.g.: Disease or Syndrome: C2881351 Irregular astigmatism of left eye 
			let type = item.substring(item.indexOf("(")+1, item.indexOf(")"))
			return type + ": " + item.substring(0, item.indexOf("(") - 1)
		}
	}
}
</script>

<style>
li:hover {
  color: black; 
  background-color:#F9CB33; 
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  position: absolute;
  z-index: 1;
  width: 300%;
  top: 100%;
  left: 50%;
  margin-left: -150%; 
  background-color: rgba(65, 86, 121, 0.9);  
  color: #fff;
  text-align: center;
  font-size: 0.9em; 
  border-radius: 6px;
  padding: 3px 0; 
}
</style>