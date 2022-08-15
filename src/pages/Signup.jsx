import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/modules/userSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success } = useSelector((state) => state.userSlice);

  useEffect(() => {
    if (success) navigate("/login");
  }, [navigate, success]);

  const [inputs, SetInputs] = useState({
    username: "",
    password: "",
    nickname: "",
  });

  const { username, password, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    SetInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onClick = (e) => {
    e.preventDefault();
    dispatch(registerUser(inputs));
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input
        name="username"
        value={username}
        placeholder="아이디"
        onChange={onChange}
      />
      <br />
      <input
        name="password"
        value={password}
        placeholder="비밀번호"
        type="password"
        onChange={onChange}
      />
      <br />
      <input
        name="nickname"
        value={nickname}
        placeholder="닉네임"
        onChange={onChange}
      />
      <br />
      <button onClick={onClick}>입력</button>
    </div>
  );
}

export default Signup;
