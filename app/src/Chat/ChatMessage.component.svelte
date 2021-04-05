<script lang="ts">
	import Avatar from '../shared/Avatar.component.svelte';
	import { DateTime } from "luxon";
	import type { Message } from './chat.model';

  export let isCurrentUser = false;
  export let message: Message;

  const formatSentDate = (ISODate: DateTime) => `${DateTime.fromISO(ISODate).toLocaleString(DateTime.DATE_FULL)} à ${DateTime.fromISO(ISODate).toLocaleString(DateTime.TIME_SIMPLE)}`;
</script>

<div class="chat-message {isCurrentUser ? 'me' : 'them'}">
	<div class="chat-message__avatar">
		<Avatar image={'avatars/' + message.profile.id + '.jpg'} />
	</div>
	<div class="chat-message__bubble">
		<p>{ message.text }</p>
	</div>
	<div class="chat-message__metadata">
		<p>Envoyé le { formatSentDate(message.metadata.sentDate) }</p>
	</div>
</div>

<style>
	.chat-message {
		display: flex;
		margin-left: -10px;
		margin-bottom: 16px;
	}
	.chat-message:last-child {
		margin-bottom: 0;
	}
	.chat-message.me {
		flex-direction: row-reverse;
	}
	.chat-message > * {
		margin-left: 10px;
	}

	.chat-message__avatar {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
	}

	.chat-message__bubble {
		background-color: #F2F8F6;
		border-radius: 10px;
		padding: 12px;
	}
	.chat-message.them .chat-message__bubble {
		border-top-left-radius: 0;
	}
	.chat-message.me .chat-message__bubble {
		background-color: #99EBCB;
		border-top-right-radius: 0;
	}
	.chat-message__bubble p {
		font-size: 14px;
		margin: 0;
		color: #565656;
	}

	.chat-message__metadata {
		flex-grow: 1;
	}
	.chat-message__metadata p {
		font-size: 10px;
		color: #9B9B9B;
		min-width: 120px;
	}
	.chat-message.them .chat-message__metadata {
		text-align: right;
	}
</style>