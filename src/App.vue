<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import Menu from '@/components/Menu.vue';
</script>

<template>

	<div class="app-wrap">
		<div class="wrap flex justify-end w-[1485px] max-[1624px]:w-svw relative">
			
			<header class="flex fixed z-10 right-[max(0px,calc(50%-46.5rem))] top-0 max-[1624px]:right-[60px]">
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">GitHub</a>
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">Discord</a>
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">Download</a>
			</header>

			<aside>
				<img alt="logo" class="logo ml-[-3px]" src="@/assets/logo.svg" width="93" height="93"/>

				<div class="wrapper mt-[70px]">

					<Menu></Menu>
					<!--					<RouterLink to="/">Home</RouterLink>-->

				</div>
			</aside>

			<main class="">
				<RouterView/>
			</main>
		</div>
	</div>
	
</template>

<style scoped>
	
	aside {
		@apply fixed w-[270px] min-h-svh left-[max(0px,calc(50%-46.5rem))] top-0 pt-[55px] pb-16 pl-[4px] transition-transform;
		@apply max-[1624px]:left-[50px] max-[1200px]:translate-x-[-400px];
		
		border-right : 2px solid rgba(199, 213, 255, 0.03);
	}
	
	main {
		@apply w-[1085px] pb-[100px];
		@apply max-[1624px]:w-[calc(100vw-390px)] max-[1624px]:pr-[60px];
		@apply max-[1200px]:w-svw max-[1200px]:pl-[60px];
	}
</style>
