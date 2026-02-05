import { create } from 'zustand';
import { fetchConversationList } from '@/mock/workflow/api';
import type { ConversationSummary } from '@/mock/workflow/data';

type ConversationStore = {
  conversations: ConversationSummary[];
  loadingConversations: boolean;
  loaded: boolean;
  fetchConversations: () => Promise<void>;
};

const useConversationStore = create<ConversationStore>((set, get) => ({
  conversations: [],
  loadingConversations: false,
  loaded: false,
  fetchConversations: async () => {
    if (get().loadingConversations || get().loaded) {
      return;
    }

    set({ loadingConversations: true });
    const conversations = await fetchConversationList();
    set({ conversations, loadingConversations: false, loaded: true });
  },
}));

export default useConversationStore;
