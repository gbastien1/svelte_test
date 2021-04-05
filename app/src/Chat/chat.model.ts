export interface Message {
  text: string;
  profile: Profile;
  metadata: {
    sent: boolean;
    received: boolean;
    viewed: boolean;
    sentDate: string;
  }
}

export interface Conversation {
  id: number;
  sender: Profile;
  recipient: Profile;
  messages: Message[];
}

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
}