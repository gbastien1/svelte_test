import { conversationMock } from './chat.mocks.js';
import { loggedProfileMock, recipientProfileMock } from '../mocks/profile.mock.js';
import { DateTime } from "luxon";

export const getConversation = () => {
	return conversationMock;
}

export const getUserProfile = (userId) => userId === loggedProfileMock.id ? loggedProfileMock : recipientProfileMock;

export const sendMessage = (text, userId) => {
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