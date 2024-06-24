
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import Welcome from "../components/Welcome";
import './ChatApp.css';

function ChatApp() {
  const [user] = useAuthState(auth);

  return (
    <div className="ChatApp">
      <NavBar />
      <hr/>
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default ChatApp;