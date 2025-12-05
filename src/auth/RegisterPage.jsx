import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPages.css";

const RegisterPage = () => {
  const navigate = useNavigate();

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
            <h2 className="auth-title">Tạo tài khoản mới</h2>
            <p className="auth-subtitle">
              Tham gia cộng đồng sinh viên VNU ngay!
            </p>
          </div>

          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Họ</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Nguyễn Văn"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Tên</label>
                <input type="text" id="lastName" placeholder="A" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email VNU</label>
              <input
                type="email"
                id="email"
                placeholder="example@vnu.edu.vn"
                required
              />
              <small className="form-hint">
                ⚠️ Chỉ chấp nhận email @vnu.edu.vn
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="studentId">Mã sinh viên</label>
              <input
                type="text"
                id="studentId"
                placeholder="20XXXXXXX"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="school">Trường</label>
              <select id="school" required>
                <option value="">Chọn trường</option>
                <option value="uet">UET - Đại học Công nghệ</option>
                <option value="hus">HUS - Đại học Khoa học Tự nhiên</option>
                <option value="ussh">
                  USSH - Đại học Khoa học Xã hội & Nhân văn
                </option>
                <option value="ftu">FTU - Đại học Ngoại ngữ</option>
                <option value="vnu-is">VNU-IS - Đại học Quốc tế</option>
                <option value="uel">UEL - Đại học Kinh tế</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                placeholder="Tối thiểu 8 ký tự"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label full-width">
                <input type="checkbox" required />
                <span>
                  Tôi đồng ý với{" "}
                  <a href="#terms" className="link">
                    Điều khoản sử dụng
                  </a>{" "}
                  và{" "}
                  <a href="#privacy" className="link">
                    Chính sách bảo mật
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className="auth-button">
              Đăng ký tài khoản
            </button>
          </form>

          <div className="auth-divider">
            <span>hoặc</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span>🔍</span>
              Đăng ký với Google
            </button>
            <button className="social-button facebook">
              <span>📘</span>
              Đăng ký với Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Đã có tài khoản?{" "}
              <button
                onClick={() => navigate("/login")}
                className="link-button"
              >
                Đăng nhập ngay
              </button>
            </p>
            <button onClick={() => navigate("/")} className="back-home">
              ← Về trang chủ
            </button>
          </div>
        </div>

        <div className="auth-info">
          <div className="info-card">
            <div className="info-icon">✅</div>
            <h3>Xác thực nhanh chóng</h3>
            <p>Chỉ cần 2 phút để hoàn tất đăng ký</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Tìm đúng người</h3>
            <p>Thuật toán thông minh kết nối phù hợp</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🌟</div>
            <h3>Miễn phí 100%</h3>
            <p>Không có chi phí ẩn, trọn gói tính năng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
