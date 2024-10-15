import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // حالة لتذكر المستخدم
  const navigate = useNavigate(); // استخدم useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
  
    // تحقق من طول اسم المستخدم وكلمة المرور
    if (username.length < 5) {
      alert('Username must be at least 5 characters.');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
    fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
       
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));



     fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((users) => {
        // تحقق مما إذا كان المستخدم موجوداً
        const user = users.find((user) => user.username === username && user.password === password);
        
        if (user) {
          // إذا كانت البيانات صحيحة، قم بتخزين القيم
          if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
          } else {
            sessionStorage.setItem('username', username);
          }

          navigate('/Homepage'); // توجيه المستخدم إلى الصفحة
        } else {
          alert('Login failed. Please check your username and password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error); // التعامل مع الأخطاء
        alert('An error occurred while logging in. Please try again.');
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="flex flex-col items-center justify-center h-[15vh]">
              <div className="flex flex-col items-center">
                <img
                  className="w-[25%] flex items-center justify-center"
                  src="https://lh6.googleusercontent.com/4DxCCiITqnh90BCQdPFShKb1CWi7QLdOrHABF0_LcqHUla_b99FnCECQEEOvMbxQiV-vprk16-0uiipp1Hl3SH1Dk-aRlIQbUPbWEtUQXccWaZsaeonnT_3MKN1HqM9THIKQRnt6W5E5xl4GaTbyXOI"
                  alt="Login"
                />
                <h1 className="font-bold text-xl">Log in</h1>
                <h1>Use Your Google Account</h1>
              </div>
            </div>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </label>
              </div>
              <div className="form-control mt-6">
                <div className="flex justify-between">
                  <h1 className="text-[#176ce7] text-center">Create account</h1>
                  <button type="submit" className="btn btn-primary bg-[#176ce7] w-[10vh]">Next</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
