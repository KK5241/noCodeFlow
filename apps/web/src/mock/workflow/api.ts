import {
  conversationSummaries,
  mockConversationDetailMap,
  type ConversationDetail,
  type ConversationSummary,
} from '@/mock/workflow/data';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchConversationList(): Promise<ConversationSummary[]> {
  await sleep(220);
  return conversationSummaries;
}

export async function fetchConversationDetail(id: string): Promise<ConversationDetail | null> {
  await sleep(280);
  return mockConversationDetailMap[id] ?? null;
}
