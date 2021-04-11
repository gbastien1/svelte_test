import { writable } from 'svelte/store';
import type { Conversation } from './chat.model';

export const currentConversation = writable<Conversation>(null);