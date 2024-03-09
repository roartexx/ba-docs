<script setup>

</script>

<template>

	<div class="flex flex-col">
		<section class="flex flex-row-reverse justify-between items-start pt-[180px]">

			<figure class="relative w-[36%] mt-[8px] overflow-hidden rounded-[15px] *:hover:opacity-80">
				<img class="w-full h-auto" alt="" src="@/assets/testimg.png"/>
				<button class="absolute inset-0 *:hover:scale-110">
					<img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="" src="@/assets/play.svg"/>
				</button>
			</figure>

			<div class="flex flex-col w-[calc(64%-70px)]">

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

		<section class="textures">
			<div class="box">
				<h3>
					<span>UV0</span>
					- Base Texture
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<a>Copy to clipboard</a>
			</div>

			<div class="box">
				<h3>
					<span>UV2</span>
					- Grout Lines
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<a>Copy to clipboard</a>
			</div>

			<div class="box">
				<h3>
					<span>UV3</span>
					- Wax Marks
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<a>Copy to clipboard</a>
			</div>

			<div class="box">
				<h3>
					<span>Triplanar</span>
					- Dirt Overlay
				</h3>
				<figure>
					<img alt="" src="@/assets/testimg.png"/>
				</figure>
				<a>Copy to clipboard</a>
			</div>
		</section>

	</div>

</template>
