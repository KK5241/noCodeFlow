import { useCallback, useState } from 'react';
import {
  AimOutlined,
  DeleteOutlined,
  DownloadOutlined,
  ExpandOutlined,
  PlusOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Divider, Input, Select, Tag, type CollapseProps } from 'antd';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeProps,
} from 'reactflow';

import 'reactflow/dist/style.css';

type WorkflowNodeData = {
  title: string;
  subtitle: string;
  tone: 'input' | 'ai' | 'process';
  hasTarget?: boolean;
  hasSource?: boolean;
};

function WorkflowNode({ data, selected }: NodeProps<WorkflowNodeData>) {
  const toneClasses = {
    input: 'border-[#98d8b5] bg-[#e8f7ef]',
    ai: 'border-[#72b672] bg-[#eff9ef]',
    process: 'border-[#a9c8ff] bg-[#edf4ff]',
  }[data.tone];

  return (
    <div
      className={`min-w-[170px] rounded-xl border px-4 py-3 shadow-sm transition ${toneClasses} ${
        selected ? 'ring-2 ring-[#7ca2ff]' : ''
      }`}
    >
      {data.hasTarget !== false && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ width: 8, height: 8, background: '#667085', border: '2px solid #fff' }}
        />
      )}

      <div className="text-base font-semibold text-[#202020]">{data.title}</div>
      <div className="text-[#656565]">{data.subtitle}</div>

      {data.hasSource !== false && (
        <Handle
          type="source"
          position={Position.Right}
          style={{ width: 8, height: 8, background: '#667085', border: '2px solid #fff' }}
        />
      )}
    </div>
  );
}

const nodeTypes = {
  workflow: WorkflowNode,
};

const initialNodes: Node<WorkflowNodeData>[] = [
  {
    id: '1',
    type: 'workflow',
    position: { x: 130, y: 180 },
    data: { title: 'Data Input', subtitle: 'Input', tone: 'input', hasTarget: false },
  },
  {
    id: '2',
    type: 'workflow',
    position: { x: 430, y: 175 },
    data: { title: 'GPT-4 Processing', subtitle: 'AI', tone: 'ai' },
  },
  {
    id: '3',
    type: 'workflow',
    position: { x: 760, y: 110 },
    data: { title: 'Transform', subtitle: 'Process', tone: 'process', hasSource: false },
  },
  {
    id: '4',
    type: 'workflow',
    position: { x: 760, y: 255 },
    data: { title: 'Filter', subtitle: 'Process', tone: 'process', hasSource: false },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-4', source: '2', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
];

const logs = [
  '14:32:01.234   [Data Input]      Starting workflow execution...',
  '14:32:01.456   [Data Input]      Connected to API endpoint successfully',
  '14:32:02.123   [GPT-4]           Processing batch 1 of 3...',
  '14:32:04.567   [GPT-4]           Batch 1 completed: 245 tokens used',
  '14:32:05.012   [Transform]       Rate limit approaching: 80% of quota used',
  '14:32:06.789   [Filter]          Filtering results with condition: score > 0.8',
  '14:32:07.234   [Filter]          Filtered 127 items from 245 total',
  '14:32:08.456   [Output]          Writing results to destination...',
];

const WorkflowPage = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [collaspe, setCollaspe] = useState(false);

  const onConnect = useCallback(
    (params: Connection | Edge) =>
      setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed } }, eds)),
    [setEdges]
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f5f5f5]">
      <div className="flex min-h-0 flex-1">
        <section className="relative min-w-0 flex-1 border-r border-[#e8e8e8] bg-white">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-xl border border-[#e6e6e6] bg-white p-1 shadow-sm">
            <Button type="text" icon={<AimOutlined />} />
            <Divider type="vertical" style={{ marginInline: 4, height: 18 }} />
            <Button type="text" icon={<ZoomOutOutlined />} />
            <span className="px-1 text-[#666]">100%</span>
            <Button type="text" icon={<ZoomInOutlined />} />
            <Button type="text" icon={<ExpandOutlined />} />
          </div>

          <Button
            className="!absolute right-4 top-4 z-10"
            type="primary"
            icon={<PlusOutlined />}
            style={{ borderRadius: 10 }}
          >
            Add Node
          </Button>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            proOptions={{ hideAttribution: true }}
            className="workflow-canvas"
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={26}
              size={2}
              color="#dedede"
              style={{ background: '#f5f5f5' }}
            />
          </ReactFlow>
        </section>

        <aside className="w-[350px] bg-[#f9f9f9] flex flex-col">
          <div className="flex h-[50px] items-center justify-between border-b border-[#e8e8e8] px-4">
            <span className="font-semibold text-[#1f1f1f]">Node Configuration</span>
            <button type="button" className="text-xl leading-none text-[#8c8c8c]">
              ×
            </button>
          </div>

          <div className="space-y-6 p-4  flex-1 overflow-auto">
            <div className="space-y-3">
              <div className="font-semibold uppercase tracking-wide text-[#7d7d7d]">General</div>
              <label className="block space-y-1">
                <span className="text-[#4a4a4a]">Node Name</span>
                <Input defaultValue="GPT-4 Processing" />
              </label>
              <label className="block space-y-1">
                <span className="text-[#4a4a4a]">Description</span>
                <Input.TextArea rows={3} placeholder="Add a description..." />
              </label>
            </div>

            <Divider style={{ margin: 0 }} />

            <div className="space-y-3">
              <div className="font-semibold uppercase tracking-wide text-[#7d7d7d]">
                AI Model Settings
              </div>
              <label className="block space-y-1">
                <span className="text-[#4a4a4a]">Model</span>
                <Select
                  defaultValue="gpt-4"
                  options={[
                    { label: 'GPT-4', value: 'gpt-4' },
                    { label: 'GPT-4o', value: 'gpt-4o' },
                  ]}
                />
              </label>
              <label className="block space-y-1">
                <span className="text-[#4a4a4a]">Temperature</span>
                <Input defaultValue="0.7" />
              </label>
              <label className="block space-y-1">
                <span className="text-[#4a4a4a]">System Prompt</span>
                <Input.TextArea
                  rows={4}
                  defaultValue="You are a helpful assistant that processes data according to the workflow requirements."
                />
              </label>
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t border-[#e8e8e8] bg-[#fafafa]">
        <Collapse
          items={[
            {
              key: '1',
              label: 'Execution Logs',
              children: (
                <div className="h-[calc(100%-48px)] overflow-auto bg-[#fafafa]">
                  <div className="space-y-2 font-mono text-[13px] text-[#4e4e4e]">
                    {logs.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ),
            },
          ]}
          defaultActiveKey={['1']}
        />
      </section>
    </div>
  );
};

export default WorkflowPage;
