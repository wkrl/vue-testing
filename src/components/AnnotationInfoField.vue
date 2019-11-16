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
				<li v-for="item in getInfoList()" :key="item">{{item}}</li>
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