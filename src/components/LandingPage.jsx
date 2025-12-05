import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎓",
      title: "Xác thực Email VNU",
      description:
        "Cộng đồng sinh viên VNU được xác thực 100%, an toàn và uy tín",
    },
    {
      icon: "📚",
      title: "Tìm bạn học & Mentor",
      description: "Kết nối học nhóm, tìm mentor-mentee cùng chuyên ngành",
    },
    {
      icon: "🎉",
      title: "Hẹn hò & Sự kiện",
      description: "Tham gia sự kiện CLB, hoạt động cộng đồng tại Hola",
    },
    {
      icon: "💖",
      title: "Crush ẩn danh VNU",
      description: "Bày tỏ tình cảm một cách kín đáo và thú vị",
    },
  ];

  const testimonials = [
    {
      name: "Minh Anh",
      school: "UET - VNU",
      comment: "Tìm được nhóm học tập và bạn bè tuyệt vời qua Hola Match!",
      avatar: "👩‍🎓",
    },
    {
      name: "Tuấn Hưng",
      school: "HUST - VNU",
      comment: "Ứng dụng rất an toàn, mọi người đều là sinh viên VNU thật.",
      avatar: "👨‍🎓",
    },
    {
      name: "Thu Trang",
      school: "FTU - VNU",
      comment: "Đã tìm được crush và cả nhóm bạn thân qua Hola!",
      avatar: "👩‍💼",
    },
  ];

  return (
    <div className="landing-container">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Kết nối dành riêng cho
              <span className="highlight"> cộng đồng sinh viên VNU</span>
            </h1>
            <p className="hero-description">
              Uy tín • An toàn • Thân thiện
              <br />
              Chỉ với email VNU của bạn
            </p>
            <div className="hero-buttons">
              <button
                className="cta-button primary"
                onClick={() => navigate("/register")}
              >
                Đăng ký ngay
                <span className="button-glow"></span>
              </button>
              <button
                className="cta-button secondary"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Sinh viên VNU</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Kết nối thành công</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">An toàn xác thực</span>
              </div>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="illustration-wrapper">
              <div className="floating-icon icon-1">💕</div>
              <div className="floating-icon icon-2">✨</div>
              <div className="floating-icon icon-3">🎓</div>
              <div className="floating-icon icon-4">💌</div>
              <div className="main-illustration">
                <div className="connection-line"></div>
                <div className="heart-pulse">💗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`features-section fade-in-section ${
          isVisible.features ? "is-visible" : ""
        }`}
      >
        <div className="section-header">
          <h2 className="section-title">Tính năng nổi bật</h2>
          <p className="section-subtitle">
            Trải nghiệm kết nối toàn diện dành riêng cho sinh viên VNU
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className={`community-section fade-in-section ${
          isVisible.community ? "is-visible" : ""
        }`}
      >
        <div className="section-header">
          <h2 className="section-title">Cộng đồng yêu thích Hola Match</h2>
          <p className="section-subtitle">
            Những câu chuyện thật từ sinh viên VNU
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.school}</span>
              </div>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Sẵn sàng tìm kiếm kết nối của bạn?</h2>
          <p className="cta-description">
            Tham gia cộng đồng sinh viên VNU sôi động nhất ngay hôm nay!
          </p>
          <button
            className="cta-button large"
            onClick={() => navigate("/register")}
          >
            Bắt đầu ngay - Miễn phí
            <span className="button-glow"></span>
          </button>
          <p className="cta-note">
            🔒 Chỉ dành cho sinh viên có email VNU (@vnu.edu.vn)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">💗 Hola Match</h3>
            <p className="footer-tagline">
              Nền tảng kết nối dành riêng cho sinh viên VNU
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Về Hola Match</h4>
              <ul>
                <li>
                  <a href="#about">Giới thiệu</a>
                </li>
                <li>
                  <a href="#features">Tính năng</a>
                </li>
                <li>
                  <a href="#community">Cộng đồng</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Hỗ trợ</h4>
              <ul>
                <li>
                  <a href="#terms">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#privacy">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#contact">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Kết nối</h4>
              <ul>
                <li>
                  <a href="#facebook">Facebook</a>
                </li>
                <li>
                  <a href="#instagram">Instagram</a>
                </li>
                <li>
                  <a href="#email">Email: hello@holamatch.vn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Hola Match - Sản phẩm dành riêng cho sinh viên VNU</p>
          <p className="footer-love">Made with 💗 by Anh Hải Anh ĐẸP TRAI</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
