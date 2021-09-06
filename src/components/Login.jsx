import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [error, serError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "d0eeee69-4307-4849-b5bb-d7944f901027",
      "User-Name": userName,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      serError("No UserName Found!!");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={submitHandler}>
          <input
            className="input"
            placeholder="UserName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="input"
            placeholder="PassWord"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <h2>{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
