import { conversationMock } from './chat.mocks';
import { loggedProfileMock, recipientProfileMock } from '../mocks/profile.mock';
import { DateTime } from "luxon";
import type { Conversation, Message, Profile } from './chat.model';

export const getConversation = (): Conversation => conversationMock;

export const getUserProfile = (userId: number): Profile => userId === loggedProfileMock.id ? loggedProfileMock : recipientProfileMock;

export const sendMessage = (text: string, userId: number): Message => {
	return {
		text,
		profile: getUserProfile(userId),
		metadata: {
			sent: true,
			received: true,
			viewed: true,
			sentDate: DateTime.now().toISO(),
		},
	}
}