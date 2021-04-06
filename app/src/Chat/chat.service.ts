import { conversationMock } from './chat.mocks';
import { loggedProfileMock, recipientProfileMock } from '../mocks/profile.mock';
import { DateTime } from "luxon";
import type { Conversation, Message, Profile } from './chat.model';

export const getConversation = (): Promise<Conversation> => {
	return new Promise<Conversation>((resolve) => {
		setTimeout(() => {
			resolve(conversationMock);
		}, 1100);
	});
};

export const getUserProfile = (userId: number): Profile => userId === loggedProfileMock.id ? loggedProfileMock : recipientProfileMock;

export const sendMessage = async (text: string, userId: number): Promise<Message> => {
	return new Promise<Message>((resolve) => {
		setTimeout(() => {
			resolve({
				text,
				profile: getUserProfile(userId),
				metadata: {
					sent: true,
					received: true,
					viewed: true,
					sentDate: DateTime.now().toISO(),
				},
			});
		}, 700);
	});
};