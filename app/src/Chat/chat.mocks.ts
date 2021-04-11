import { loggedProfileMock, recipientProfileMock } from '../mocks/profile.mock';
import type { Message, Conversation } from './chat.model';

export const messagesMock: Message[] = [
	{
		text: 'Lorem ipsum',
		profile: loggedProfileMock,
		metadata: {
			sent: true,
			received: true,
			viewed: true,
			sentDate: '2021-04-04T13:52:00',
		},
	},
	{
		text: 'Lorem ipsum',
		profile: recipientProfileMock,
		metadata: {
			sent: true,
			received: true,
			viewed: false,
			sentDate: '2021-04-04T13:54:00',
		},
	},
];

export const conversationMock: Conversation = {
	id: 123,
	sender: loggedProfileMock,
	recipient: recipientProfileMock,
	messages: messagesMock,
};