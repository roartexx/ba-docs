<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import Menu from '@/components/Menu.vue';
</script>

<template>

	<div class="app-wrap">
		<div class="wrap flex justify-end w-[1485px] relative">
			
			<header class="flex fixed right-[max(0px,calc(50%-46.5rem))] top-0">
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">GitHub</a>
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">Discord</a>
				<a class="text-[16px] font-bold ml-8 py-8 hover:text-blue">Download</a>
			</header>

			<aside class="fixed w-[270px] left-[max(0px,calc(50%-46.5rem))] top-0 pt-[55px] pb-16 pl-[4px]">
				<img alt="logo" class="logo ml-[-3px]" src="@/assets/logo.svg" width="93" height="93"/>

				<div class="wrapper mt-[70px]">

					<Menu></Menu>
					<!--					<RouterLink to="/">Home</RouterLink>-->

				</div>
			</aside>

			<main class="w-[1085px]">
				<RouterView/>
			</main>
		</div>
	</div>
	
</template>

<style scoped>
	aside {
		border-right : 2px solid rgba(199, 213, 255, 0.03);
	}
</style>
