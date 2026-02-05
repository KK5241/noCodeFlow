import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import WorkflowPage from './pages/workflow';

function App() {
  return (
    <Routes>
      {/* 嵌套路由 */}
      <Route element={<Layout />}>
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/workflow/:conversationId" element={<WorkflowPage />} />
        <Route path="*" element={<Navigate to="/workflow" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
