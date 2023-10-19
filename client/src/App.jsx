import Chat from './components/Chat';
import EnterChat from './components/EnterChat';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="chat-container">
        <h1 className="display-1">Chat</h1>
        <Routes>
          <Route path="/" element={<EnterChat />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
