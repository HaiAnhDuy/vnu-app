import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPages.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Kiểm tra thông tin đăng nhập
    if (email === "ung.nhu.ngoc@vnu.edu.vn" && password === "123456") {
      navigate("/app/home");
    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-logo">💗 Hola Match</h1>
            <h2 className="auth-title">Chào mừng trở lại!</h2>
            <p className="auth-subtitle">
              Đăng nhập để kết nối với cộng đồng VNU
            </p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            {error && (
              <div
                className="error-message"
                style={{
                  background: "rgba(255, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 0, 0, 0.3)",
                  color: "#d32f2f",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email VNU</label>
              <input
                type="email"
                id="email"
                placeholder="example@vnu.edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Ghi nhớ đăng nhập</span>
              </label>
              <a href="#forgot" className="forgot-link">
                Quên mật khẩu?
              </a>
            </div>

            <button type="submit" className="auth-button">
              Đăng nhập
            </button>
          </form>

          <div className="auth-divider">
            <span>hoặc</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span>🔍</span>
              Đăng nhập với Google
            </button>
            <button className="social-button facebook">
              <span>📘</span>
              Đăng nhập với Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Chưa có tài khoản?{" "}
              <button
                onClick={() => navigate("/register")}
                className="link-button"
              >
                Đăng ký ngay
              </button>
            </p>
            <button onClick={() => navigate("/")} className="back-home">
              ← Về trang chủ
            </button>
          </div>
        </div>

        <div className="auth-info">
          <div className="info-card">
            <div className="info-icon">🎓</div>
            <h3>Dành riêng cho VNU</h3>
            <p>Chỉ sinh viên VNU mới có thể tham gia</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🔒</div>
            <h3>An toàn tuyệt đối</h3>
            <p>Thông tin được bảo mật và xác thực</p>
          </div>
          <div className="info-card">
            <div className="info-icon">💕</div>
            <h3>Kết nối thật</h3>
            <p>Tìm bạn bè, học tập và người yêu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
