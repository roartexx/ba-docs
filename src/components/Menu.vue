<script setup>
</script>

<template>

	<nav>
		<p>Shader Materials</p>
		<div>
			<a><span>Ultimate Trim v2</span></a>
			<a><span>Ultimate Tiles</span></a>
			<a class="active"><span>Ledge Slab Shader</span></a>
			<a><span>Puddles Blend Shader</span></a>
			<a><span>Decal Shader</span></a>
		</div>

		
		<p>Props</p>
		<div>
			<a><span>Decorative</span></a>
			<a><span>Skateable</span></a>
			<a><span>Repeatable</span></a>
			<a><span>Material Usage</span></a>
		</div>

		<p>Introduction</p>
		<div>
			<a><span>Getting Started</span></a>
			<a><span>Object Sizes</span></a>
			<a><span>Contributing</span></a>
		</div>
	</nav>
	
</template>

<style scoped>

	nav{
		display:flex;
		flex-direction: column;
		
		p{
			@apply font-bold m-0 mb-2;
		}
		
		div {
			display:flex;
			flex-direction: column;
			position : relative;
			border-left:1px solid rgba(209, 209, 207, .08);
			margin: 18px 0 36px;
			
			a {
				display : flex;
				
				span {
					@apply text-grey;
					font-size:15px;
					padding:5px 0 5px 22px;
				}

				
				
				&:first-child {
					margin-top:-5px;
				}
				
				&:last-child {
					margin-bottom:-5px;
				}

				&:hover span {
					@apply text-white;
					transform: translate3d(3px, 0, 0);
				}

				&.active {
					box-shadow: -1px 0 0 #38BDF8;
					
					span {
						@apply text-blue font-bold;
						transform: none;
					}
				}
			}

			
		}
	}
	
</style>
