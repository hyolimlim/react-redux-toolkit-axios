import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [inputs, SetInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    SetInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        placeholder="아이디"
        name="username"
        value={username}
        onChange={onChange}
      />{" "}
      <br />
      <input
        placeholder="비밀번호"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />{" "}
      <br />
      <button>입력</button>
    </div>
  );
}

export default Login;
