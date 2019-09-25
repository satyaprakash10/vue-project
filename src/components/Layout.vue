<template>
	<div>
		<navbar/>
		<sidebar/>
		<div class="main-content">
			<Content/>
		</div>
	</div>	
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import Content from "../components/Content";
 
export default {
  components: {
    Sidebar,
    Navbar,
    Content
  }
};
</script>

<style>
  .body {
		/* background: rgb(141, 171, 238); */
	}
	.main-content {
		padding-left: 225px;
		padding-top: 55px;
		width: 100%;
		position: absolute;
		background:  rgb(230, 234, 243);
	}

@media screen and (max-width: 768px) {
  .main-content {
	  padding-left: 80px;
		padding-top: 50px;  
		margin-top: -19px;
    /* background: white; */
	 } 
} 
</style>