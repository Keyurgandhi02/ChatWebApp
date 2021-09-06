import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [login, isLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [error, serError] = useState("");
  const private_key = "b788372f-9737-4bdc-991a-7c6072427e0a";
  const switchAuthModeHandler = () => {
    isLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (login) {
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
    } else {
      const data = {
        username: userName,
        first_name: "Adam",
        last_name: "La Morre",
        secret: password,
        custom_json: { high_score: 2000 },
      };
      console.log(data);
      const response = {
        method: "POST",
        url: "https://api.chatengine.io/users/",
        headers: {
          "PRIVATE-KEY": private_key,
        },
        data: data,
      };
      axios(response)
        .then(function (response) {
          JSON.stringify(response.data);
        })
        .catch(function (error) {
          serError("Error While Adding User");
        });

      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          {login ? "Chat Application" : "Register YourSelf"}
        </h1>
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
              <span>{login ? "Login" : "Sign Up"}</span>
            </button>
            <button
              className="toggle"
              type="button"
              onClick={switchAuthModeHandler}
            >
              {login ? "Create new account" : "Login with existing account"}
            </button>
            <h2>{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
