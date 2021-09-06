import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import SignUp from "./components/SignUp";
function App() {
  if (!localStorage.getItem("username")) return <SignUp />;

  return (
    <ChatEngine
      height="100vh"
      projectID="d0eeee69-4307-4849-b5bb-d7944f901027"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    ></ChatEngine>
  );
}

export default App;
