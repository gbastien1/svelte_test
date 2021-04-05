<script lang="ts">
	import SendIcon from '../shared/svg/SendIcon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onSubmit = (event: Event) => dispatch('submit', { form: event.target });
</script>

<form class="chat__composer" on:submit|preventDefault={onSubmit}>
	<textarea name="message"></textarea>
	<button class="button button--send" type="submit">
		<SendIcon color="#98CABD"/>
	</button>
</form>

<style>
	.chat__composer {
		border-top: 1px solid #E8E8E8;
		display: flex;
	}
	textarea {
		resize: none;
		margin: 0;
		flex-grow: 1;
		border: 1px solid transparent;
		border-top: 0;
	}
	textarea:is(:focus, :active) {
		outline-color: #98CABD;
	}
	.button--send {
		width: 50px;
		flex-shrink: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.button--send:hover {
		background-color: #F9F9F9;
	}
</style>