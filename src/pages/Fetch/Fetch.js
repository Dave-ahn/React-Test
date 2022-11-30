
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

const navigate = useNavigate();

fetch('http://127.0.0.1:3000/auth?kakaoAuthorizationCode=${code}', {
  method: 'POST',
  body: JSON.stringify({
  }),
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
  .then(localStorage.setItem('token', data.accessToken));
  .then(navigate('/main'));
  });

const KakaoLogin = () => {
    let params = new URLSearchParams(document.location.search);
    let code = params.get('code');
    console.log(code);
}

return (

);

};

export default LoginComponent;