<script lang="ts">
	import ChatMessage from './ChatMessage.component.svelte';
	import ChatComposer from './ChatComposer.component.svelte';
	import { getConversation } from './chat.service.js';
	import { sendMessage } from './chat.service.js';

	let name = 'Chat Box';
	let currentUserId = 1;
	let recipientUserId = 2;
	$: conversation = getConversation();

	let getRecipientProfile = () => conversation.messages.find(message => message.profile.id === recipientUserId).profile;
	let isCurrentUser = (message) => message.profile.id === currentUserId;

	const onSendMessage = ({ detail: { form } }) => {
		const message = form.querySelector('textarea').value;
		const newMessageObject = sendMessage(message, currentUserId);
		conversation = {
			...conversation,
			messages: [
				...conversation.messages,
				newMessageObject
			],
		};
		form.reset();
	};
</script>

<div class="chat">
	<header class="chat__header">
		<h3>Vous et { getRecipientProfile().firstName }</h3>
	</header>
	<section class="chat__body">
		{#each conversation.messages as message}
			<ChatMessage isCurrentUser={isCurrentUser(message)} {message} />
		{/each}
	</section>
	<ChatComposer on:submit={onSendMessage} />
</div>

<style>
	.chat {
		width: 480px;
		margin: 100px auto 0;
		background-color: #fff;
	}
	.chat__header {
		padding: 8px 24px;
		background-color: #98CABD;
		color: white;
	}
	.chat__body {
		padding: 16px 24px;
	}
</style>