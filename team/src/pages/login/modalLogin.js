import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useinput";
import { Login, LOGIN_R } from "../../reducer/userReducer";
import * as style from "./style";
import { motion } from "framer-motion";
const ModalLogin = ({ setLoginModalOpen, signModal }) => {
  //modal창 close 로직
  const closeModal = () => {
    setLoginModalOpen(false);
  };
  const ModalRef = useRef(null);

  //modal창 외부 클릭시 close로직
  useEffect(() => {
    const handler = (e) => {
      if (ModalRef.current && !ModalRef.current.contains(e.target)) {
        setLoginModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  //login에서 회원가입창클릭시 창이 겹침으로 회원가입창 열림과 동시에 login창 닫기 로직
  const MoveSign = () => {
    signModal(true);
    if (signModal) {
      setLoginModalOpen(false);
    }
  };

  const [id, changeId, setId] = useInput("");
  const [pw, changePw, setPw] = useInput("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // const loginHandler = useCallback(
  //   (e) => {
  //   //   // e.preventDefault();
  //   //   dispatch({
  //   //     type: LOGIN_R,
  //   //     data: {
  //   //       id: id,
  //   //       pw: pw,
  //   //     },
  //   //   });
  //   //   if (me) {
  //   //     setLoginModalOpen(false);
  //   //   } else {
  //   //     setLoginModalOpen(true);
  //   //   }
  //   // },
  //   // [id, pw]
  // );
  const { user } = useSelector((state) => state.user);
  const LoginHandler = () => {
    dispatch(Login({ email: id, password: pw, info: true }));
    setLoginModalOpen(false);
    alert("로그인성공");
    navigator("/hide");
  };
  // useEffect(() => {
  //   if (!me) {
  //     return;
  //   }
  //   navigator("/hide");
  //   setLoginModalOpen(false);
  // }, [me]);
  return (
    <style.Form ref={ModalRef}>
      <style.FormInner>
        <h2>로그인</h2>
        <p>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={changeId}
            required
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={changePw}
            required
          />
        </p>
        <style.Btn onClick={LoginHandler}>로그인</style.Btn>
        <style.CloseBtn onClick={closeModal}>
          <style.CloseImg src="img/glen/58007_close_icon.png" alt="" />
        </style.CloseBtn>
        <p>
          <style.TextSign to="" onClick={MoveSign}>
            아직 회원이 아니신가요?
          </style.TextSign>
        </p>
      </style.FormInner>
    </style.Form>
  );
};

export default ModalLogin;
