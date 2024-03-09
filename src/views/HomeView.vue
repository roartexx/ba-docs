<script setup>

</script>

<template>

	<div class="flex flex-col">
		<section class="flex flex-row-reverse justify-between items-start pt-[180px] max-[900px]:flex-col">

			<figure class="cursor-pointer w-[36%] mt-[8px] max-[900px]:w-full max-[900px]:mb-[40px] ">
				<img alt="" src="@/assets/testimg.png"/>
				<button>
					<img alt="" src="@/assets/play.svg"/>
				</button>
			</figure>

			<div class="flex flex-col w-[calc(64%-70px)] max-[900px]:w-full">

				<h1>Ledge Slab Shader</h1>

				<h4>This is a shader that’s great for use on ledges and solid surfaces that need to look like
				    slabs.</h4>

				<ul class="horizontal">
					<li>Tileable</li>
					<li>Designed for chamfered models</li>
				</ul>

				<h2>Layers</h2>

				<ul class="checks">
					<li>Base texture to be offset for a different look per slab</li>
					<li>Grout lines overlay
						<span>(custom color mask, roughness, normal)</span>
					</li>
					<li>Wax marks
						<span>(black albedo, roughness)</span>
					</li>
					<li>Dirt overlay
						<span>(monochrome albedo, roughness)</span>
					</li>
				</ul>

			</div>

		</section>

		<hr/>

		<section class="textures flex justify-between">
			<div class="box">
				<h3>
					<span>UV0</span>
					Base Texture
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<p><strong>Base_Textures</strong> <span>/</span></p>
			</div>

			<div class="box">
				<h3>
					<span>UV2</span>
					Grout Lines
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<p><strong>_Textures</strong> <span>/</span> Ledge Slabs</p>
			</div>

			<div class="box">
				<h3>
					<span>UV3</span>
					Wax Marks
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<p><strong>_Textures</strong> <span>/</span> Grind Marks</p>
			</div>

			<div class="box">
				<h3>
					<span>Triplanar</span>
					Dirt
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<p><strong>_Textures</strong> <span>/</span> Dirt</p>
			</div>
		</section>

	</div>

</template>

<style scoped>
	.box {
		@apply w-[21%];

		h3 span {
			@apply text-blue font-medium pr-[8px];
		}
		
		figure {
			@apply my-[15px];
		}
		
		p, a {
			@apply text-grey flex;
			
			strong {
				@apply text-white;
			}
			
			span {
				@apply px-[6px] opacity-35 font-medium;
			}
		}
	}
</style>