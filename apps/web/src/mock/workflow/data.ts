export type ConversationSummary = {
  id: string;
  title: string;
};

export type ConversationDetail = {
  id: string;
  title: string;
  nodeName: string;
  description: string;
  model: string;
  temperature: string;
  systemPrompt: string;
  logs: string[];
};

export const conversationSummaries: ConversationSummary[] = [
  { id: '8f3125ba-431f-4d79-86d1-0678e0c8a101', title: '工作流历史记录 01' },
  { id: 'be9fbcb6-d3a8-4fd8-ab12-2b42ec81931e', title: '工作流历史记录 02' },
  { id: '2f31f099-c470-45c9-a17f-70235f131cbf', title: '工作流历史记录 03' },
  { id: 'cb5b43f0-2d0f-4240-9fc1-f2f18fed8481', title: '工作流历史记录 04' },
  { id: 'b9f55d9b-c68a-489d-b95f-a0f395e4c5ce', title: '工作流历史记录 05' },
];

export const mockConversationDetailMap: Record<string, ConversationDetail> = {
  '8f3125ba-431f-4d79-86d1-0678e0c8a101': {
    id: '8f3125ba-431f-4d79-86d1-0678e0c8a101',
    title: '工作流历史记录 01',
    nodeName: 'GPT-4 Processing',
    description: 'Classify uploaded images and extract metadata.',
    model: 'gpt-4',
    temperature: '0.7',
    systemPrompt:
      'You are a helpful assistant that classifies incoming image data and returns structured labels.',
    logs: [
      '14:32:01.234   [Data Input]      Starting workflow execution...',
      '14:32:01.456   [Data Input]      Connected to API endpoint successfully',
      '14:32:02.123   [GPT-4]           Processing batch 1 of 3...',
      '14:32:04.567   [GPT-4]           Batch 1 completed: 245 tokens used',
      '14:32:05.012   [Transform]       Rate limit approaching: 80% of quota used',
      '14:32:06.789   [Filter]          Filtering results with condition: score > 0.8',
      '14:32:07.234   [Filter]          Filtered 127 items from 245 total',
      '14:32:08.456   [Output]          Writing results to destination...',
    ],
  },
  'be9fbcb6-d3a8-4fd8-ab12-2b42ec81931e': {
    id: 'be9fbcb6-d3a8-4fd8-ab12-2b42ec81931e',
    title: '工作流历史记录 02',
    nodeName: 'GPT-4 Summarizer',
    description: 'Summarize long-form article content.',
    model: 'gpt-4o',
    temperature: '0.4',
    systemPrompt: 'Summarize the given text in concise bullet points.',
    logs: [
      '09:10:11.093   [Input]          Received 4 text chunks',
      '09:10:11.548   [Prompt]         Built summarization template',
      '09:10:12.101   [LLM]            Summary generation started',
      '09:10:14.337   [Output]         Summary written to destination',
    ],
  },
  '2f31f099-c470-45c9-a17f-70235f131cbf': {
    id: '2f31f099-c470-45c9-a17f-70235f131cbf',
    title: '工作流历史记录 03',
    nodeName: 'Clean Data',
    description: 'Normalize and clean incoming tabular data.',
    model: 'gpt-4',
    temperature: '0.2',
    systemPrompt: 'Transform raw records into normalized JSON rows.',
    logs: [
      '17:21:09.220   [Input]          1,240 rows loaded',
      '17:21:10.098   [Transform]      Standardized 32 fields',
      '17:21:11.733   [Filter]         Removed 19 invalid rows',
      '17:21:12.224   [Output]         Export complete',
    ],
  },
  'cb5b43f0-2d0f-4240-9fc1-f2f18fed8481': {
    id: 'cb5b43f0-2d0f-4240-9fc1-f2f18fed8481',
    title: '工作流历史记录 04',
    nodeName: 'Sentiment Classifier',
    description: 'Analyze user feedback sentiment by topic.',
    model: 'gpt-4o',
    temperature: '0.5',
    systemPrompt: 'Classify sentiment and confidence score for each feedback.',
    logs: [
      '10:00:00.011   [Input]          Received feedback dataset',
      '10:00:00.733   [LLM]            Inference in progress',
      '10:00:03.145   [Output]         Sentiment report generated',
    ],
  },
  'b9f55d9b-c68a-489d-b95f-a0f395e4c5ce': {
    id: 'b9f55d9b-c68a-489d-b95f-a0f395e4c5ce',
    title: '工作流历史记录 05',
    nodeName: 'OCR Extraction',
    description: 'Extract fields from scanned documents.',
    model: 'gpt-4',
    temperature: '0.3',
    systemPrompt: 'Extract key entities from OCR text and structure as JSON.',
    logs: [
      '08:45:20.043   [Input]          25 documents queued',
      '08:45:21.502   [OCR]            Text extraction complete',
      '08:45:22.666   [LLM]            Entity normalization complete',
      '08:45:23.009   [Output]         Fields saved',
    ],
  },
};
