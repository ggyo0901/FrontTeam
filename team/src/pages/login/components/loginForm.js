import { Link } from "react-router-dom";
import styled from "styled-components";
const LoginForm = () => {
  return (
    <>
      <Form>
        <FormInner>
          <h2>타이틀</h2>
          <p>
            <input type="text" placeholder="아이디를 입력해주세요" />
          </p>
          <p>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </p>
          <button>로그인</button>
          <p>
            <Link to="/sign">아직 회원이 아니신가요?</Link>
          </p>
        </FormInner>
      </Form>
    </>
  );
};
export default LoginForm;

const Form = styled.div`
  width: 500px;

  margin: 100px auto;
  /* background-color: gray; */
`;
const FormInner = styled.div`
  padding: 100px 0;
  height: 600px;
  border: 1px solid black;
  & > h2 {
    margin-bottom: 100px;
  }
  & p {
    margin: 40px 0;
  }
  & p > input {
    width: 300px;
    height: 40px;
    margin-left: 20px;
    border-radius: 5px 5px;
    text-indent: 20px;
  }
`;
