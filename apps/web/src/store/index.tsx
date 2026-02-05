import { create } from 'zustand';
import { fetchConversationList } from '@/mock/workflow/api';
import type { ConversationSummary } from '@/mock/workflow/data';

type WorkflowHistoryStore = {
  workflowHistories: ConversationSummary[];
  loadingWorkflowHistories: boolean;
  loaded: boolean;
  fetchWorkflowHistories: () => Promise<void>;
};

const useWorkflowHistoryStore = create<WorkflowHistoryStore>((set, get) => ({
  workflowHistories: [],
  loadingWorkflowHistories: false,
  loaded: false,
  fetchWorkflowHistories: async () => {
    if (get().loadingWorkflowHistories || get().loaded) {
      return;
    }

    set({ loadingWorkflowHistories: true });
    const workflowHistories = await fetchConversationList();
    set({ workflowHistories, loadingWorkflowHistories: false, loaded: true });
  },
}));

export default useWorkflowHistoryStore;
