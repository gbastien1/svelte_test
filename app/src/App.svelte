<script lang="ts">
	import Chat from './Chat/Chat.component.svelte';
</script>

<main>
	<Chat />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

	:global(body) {
		background-color: #EFF5F4;
		padding: 0;
		margin: 0;
		font-family: "Open Sans", Sans Serif;
	}
	:global(html, html *) {
		box-sizing: border-box;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		line-height: 1.5;
	}
	:global(button) {
		appearance: none;
		border: 0;
		background: none;
		padding: 0;
		margin: 0;
		outline: none;
	}
</style>