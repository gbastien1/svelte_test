<script lang="ts">
	import { scale } from 'svelte/transition';
	import Avatar from '../shared/Avatar.component.svelte';
	import { DateTime } from "luxon";
	import type { Message } from './chat.model';

  export let isCurrentUser = false;
  export let message: Message;

  const formatSentDate = (ISODate: string) => `${DateTime.fromISO(ISODate).toLocaleString(DateTime.DATE_FULL)} à ${DateTime.fromISO(ISODate).toLocaleString(DateTime.TIME_SIMPLE)}`;
</script>

<div class="chat-message {isCurrentUser ? 'me' : 'them'}" in:scale="{{duration: 300, start: 0.75}}">
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

<style lang="scss">
	.chat-message {
		display: flex;
		margin-left: -10px;
		margin-bottom: 16px;

		> * {
			margin-left: 10px;
		}
		&:last-child {
			margin-bottom: 0;
		}
		&.me {
			flex-direction: row-reverse;
		}
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

		p {
			font-size: 14px;
			margin: 0;
			color: #565656;
		}
		.chat-message.them & {
			border-top-left-radius: 0;
		}
		.chat-message.me & {
			border-top-right-radius: 0;
			background-color: #99EBCB;
		}
	}

	.chat-message__metadata {
		flex-grow: 1;

		p {
			font-size: 10px;
			color: #9B9B9B;
			min-width: 120px;
		}
		.chat-message.them & {
			text-align: right;
		}
	}
</style>