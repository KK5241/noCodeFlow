import './App.css';
import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Layout from './layout';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

function App() {
  return (
    // <div className="w-full h-screen flex flex-col bg-background">
    //   <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
    //     <h1 className="text-2xl font-bold text-primary">
    //       NoCodeFlow <span className="text-sm font-normal text-muted-foreground">Tailwind 测试模式</span>
    //     </h1>
    //     <div className="flex items-center gap-4">
    //       <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
    //         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
    //         Tailwind 生效中
    //       </div>
    //       <Button className="bg-red-500">Shadcn Button</Button>
    //       <button
    //         type="button"
    //         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
    //       >
    //         原生 Tailwind Button
    //       </button>
    //     </div>
    //   </header>

    //   <main className="flex-1 w-full relative">
    //     <div className="absolute inset-0">
    //       <Flow />
    //     </div>
    //   </main>
    // </div>
    <div>
      <Layout>
        <Flow />
        {/* <div>213</div> */}
      </Layout>
    </div>
  );
}

export default App;
