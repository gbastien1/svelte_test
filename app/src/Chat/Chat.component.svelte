<script lang="ts">
	import ChatMessage from './ChatMessage.component.svelte';
	import ChatComposer from './ChatComposer.component.svelte';
	import Spinner from '../shared/Spinner.component.svelte';
	import { getConversation } from './chat.service';
	import { sendMessage } from './chat.service';
	import type { Conversation, Message } from './chat.model';
	import { currentConversation } from './stores';

	let currentUserId: number = 1;
	let recipientUserId: number = 2;
	let conversation: Conversation;

	let getRecipientProfile = () => conversation.messages.find(message => message.profile.id === recipientUserId).profile;
	let isCurrentUser = (message: Message) => message.profile.id === currentUserId;
	
	const onSendMessage = async ({ detail: { form } }) => {
		const message = form.querySelector('textarea').value;
		form.reset();
		const newMessageObject = await sendMessage(message, currentUserId);
		currentConversation.set({
			...conversation,
			messages: [
				...conversation.messages,
				newMessageObject
			],
		});
	};
	const getCurrentConversation = async () => {
		const conversation = await getConversation();
		currentConversation.set(conversation);
	}

	currentConversation.subscribe((storeConversation) => {
		if (storeConversation) {
			conversation = storeConversation;
		} else {
			getCurrentConversation();
		}
	});
</script>

<div class="chat">
	<header class="chat__header">
		{#if conversation}
			<h3>Vous et { getRecipientProfile().firstName }</h3>
		{/if}
	</header>
	<section class="chat__body">
		{#if conversation}
			{#each conversation.messages as message}
				<ChatMessage isCurrentUser={isCurrentUser(message)} {message} />
			{/each}
		{:else}
			<div class="chat__spinner-wrapper">
				<Spinner/>
			</div>
		{/if}
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
		min-height: 44px;
	}
	.chat__body {
		padding: 16px 24px;
		max-height: 500px;
		overflow-y: auto;
	}
	.chat__spinner-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 120px;
	}
</style>