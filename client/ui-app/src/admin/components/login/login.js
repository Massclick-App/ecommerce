import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/action/authAction.js';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import './login.css';

export default function Login({ setIsAuthenticated }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userName, password));
  };

  useEffect(() => {
    if (auth.user && auth.accessToken) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  }, [auth]);

  return (
    <div className="eco-shell">
      <div className="eco-container">

        {/* LEFT SIDE */}
        <div className="eco-left">

          <div className="eco-brand">
            <h3>MassClick Commerce</h3>
          </div>

          <h1>
            Power your <span>Global Commerce</span>
          </h1>

          <p>
            Build, manage, and scale your online business with enterprise-grade tools trusted by modern commerce brands worldwide.
          </p>

          <div className="eco-features">
            <div>🚀 Sell across global marketplaces</div>
            <div>📦 Smart inventory & logistics</div>
            <div>📊 Real-time analytics & insights</div>
            <div>🔐 Secure payments & compliance</div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="eco-card">

          <div className="eco-card-header">
            <h2>Welcome Back 👋</h2>
            <p className="eco-sub">Sign in to your admin dashboard</p>
          </div>

          {auth.error && <div className="eco-error">{auth.error}</div>}

          <form onSubmit={handleSubmit}>

            <div className="eco-input-group">
              <input
                type="text"
                placeholder="Email or Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="eco-input-group eco-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>

            <button className="eco-btn" disabled={auth.loading}>
              {auth.loading ? "Signing in..." : "Login"}
            </button>

          </form>

          <div className="eco-footer">
            <Link to="#">Forgot Password?</Link>
          </div>

          {/* TRUST BADGE */}
          <div className="eco-trust">
            🔒 Secure Login • Trusted by 10,000+ businesses
          </div>

        </div>

      </div>
    </div>
  );
}