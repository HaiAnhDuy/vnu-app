import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFeature, setActiveFeature] = useState(null);

  // Mock user data
  const user = {
    name: "Hải Anh",
    avatar: "👩‍🎓",
    school: "UET - VNU",
    year: "Năm 3",
    notifications: 3,
    online: true,
  };

  // Quick features
  const quickFeatures = [
    {
      id: 1,
      icon: "📚",
      title: "Tìm bạn học nhóm",
      color: "#5e35b1",
    },
    {
      id: 2,
      icon: "🎉",
      title: "Kết nối sự kiện",
      color: "#ec407a",
    },
    {
      id: 3,
      icon: "📍",
      title: "Gần bạn",
      color: "#2196f3",
    },
    {
      id: 4,
      icon: "💕",
      title: "Crush ẩn danh",
      color: "#e91e63",
    },
    {
      id: 5,
      icon: "👤",
      title: "Hồ sơ cá nhân",
      color: "#9c27b0",
    },
  ];

  // Suggested connections - More users for desktop grid
  const suggestions = [
    {
      id: 1,
      name: "Minh Tuấn",
      avatar: "👨‍💻",
      school: "UET - VNU",
      major: "Khoa học máy tính",
      year: "Năm 4",
      tags: ["Học nhóm", "Python", "AI"],
      online: true,
      compatibility: 92,
    },
    {
      id: 2,
      name: "Thu Hương",
      avatar: "👩‍🎨",
      school: "USSH - VNU",
      major: "Ngôn ngữ Anh",
      year: "Năm 2",
      tags: ["Sự kiện", "CLB", "Mentor"],
      online: true,
      compatibility: 88,
    },
    {
      id: 3,
      name: "Đức Anh",
      avatar: "👨‍🔬",
      school: "HUST - VNU",
      major: "Kỹ thuật điện tử",
      year: "Năm 3",
      tags: ["Mentor", "IoT", "Robotics"],
      online: false,
      compatibility: 85,
    },
    {
      id: 4,
      name: "Lan Anh",
      avatar: "👩‍💼",
      school: "FTU - VNU",
      major: "Kinh tế quốc tế",
      year: "Năm 3",
      tags: ["Học nhóm", "Tiếng Anh"],
      online: true,
      compatibility: 90,
    },
    {
      id: 5,
      name: "Quang Minh",
      avatar: "👨‍🎓",
      school: "UET - VNU",
      major: "An toàn thông tin",
      year: "Năm 2",
      tags: ["Học nhóm", "Security", "CTF"],
      online: true,
      compatibility: 87,
    },
    {
      id: 6,
      name: "Phương Anh",
      avatar: "👩‍🏫",
      school: "VNU-ULIS",
      major: "Tiếng Trung",
      year: "Năm 4",
      tags: ["Sự kiện", "Ngôn ngữ"],
      online: true,
      compatibility: 83,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Hoàng Nam",
      avatar: "👨‍💼",
      text: "Tìm được nhóm học tập tuyệt vời qua Hola!",
      school: "UET - VNU",
    },
    {
      id: 2,
      name: "Mai Ly",
      avatar: "👩‍🎨",
      text: "Đã kết nối được với mentor và bạn bè mới.",
      school: "FTU - VNU",
    },
    {
      id: 3,
      name: "Tuấn Anh",
      avatar: "👨‍🔬",
      text: "Ứng dụng an toàn, mọi người đều là SV VNU.",
      school: "HUST - VNU",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleConnect = (name) => {
    alert(`Gửi lời mời kết nối đến ${name}! 💗`);
  };

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature.id);
    alert(`Mở tính năng: ${feature.title}`);
  };

  return (
    <div className="homepage-container">
      {/* Floating Background Hearts */}
      <div className="floating-bg-elements">
        <div className="float-heart">💗</div>
        <div className="float-heart">💕</div>
        <div className="float-heart">✨</div>
        <div className="float-heart">🌟</div>
        <div className="float-heart">💫</div>
      </div>

      {/* Welcome Banner */}
      <section className="welcome-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1
              className="banner-subtitle"
              style={{ color: "white", fontSize: "2.5rem" }}
            >
              Chào mừng đến với <span className="highlight">Hola Match</span> 💗
            </h1>
            <p className="banner-subtitle">
              Nền tảng kết nối dành riêng cho sinh viên VNU - Nơi bạn tìm được
              bạn học, bạn bè và có thể là... tình yêu! ✨
            </p>
            <div className="banner-stats">
              <div className="stat-badge">
                <span className="stat-badge-icon">👥</span>
                <div>
                  <strong>5,000+</strong>
                  <span>Sinh viên</span>
                </div>
              </div>
              <div className="stat-badge">
                <span className="stat-badge-icon">🎓</span>
                <div>
                  <strong>12</strong>
                  <span>Trường VNU</span>
                </div>
              </div>
              <div className="stat-badge">
                <span className="stat-badge-icon">💕</span>
                <div>
                  <strong>1,234</strong>
                  <span>Kết nối mới</span>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-illustration">
            <div className="illustration-circle">
              <span className="illust-emoji">🎓</span>
            </div>
            <div className="illustration-circle">
              <span className="illust-emoji">💗</span>
            </div>
            <div className="illustration-circle">
              <span className="illust-emoji">🎉</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="quick-actions">
          {quickFeatures.slice(0, 4).map((feature) => (
            <button
              key={feature.id}
              className={`quick-action-btn ${
                activeFeature === feature.id ? "active" : ""
              }`}
              onClick={() => handleFeatureClick(feature)}
            >
              <span className="action-icon">{feature.icon}</span>
              <span className="action-label">{feature.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Quick Suggestions Section */}
        <section className="suggestions-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">✨</span>
              Gợi ý kết nối nhanh
            </h2>
            <button className="see-all-btn">
              Xem tất cả <span className="arrow">→</span>
            </button>
          </div>

          <div className="suggestions-grid">
            {suggestions.map((person, index) => (
              <div
                key={person.id}
                className="suggestion-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-top">
                  <div className="compatibility-badge">
                    <span className="compat-icon">💫</span>
                    {person.compatibility}%
                  </div>
                  {person.online && (
                    <div className="online-badge">
                      <span className="pulse-dot"></span>
                      Online
                    </div>
                  )}
                </div>

                <div className="person-avatar-section">
                  <div className="person-avatar-wrapper">
                    <span className="person-avatar">{person.avatar}</span>
                    {person.online && <span className="online-dot"></span>}
                  </div>
                </div>

                <div className="person-details">
                  <h3 className="person-name">{person.name}</h3>
                  <p className="person-school">{person.school}</p>
                  <p className="person-major">
                    {person.major} • {person.year}
                  </p>
                </div>

                <div className="person-tags">
                  {person.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="connect-btn"
                  onClick={() => handleConnect(person.name)}
                >
                  <span className="btn-icon">💗</span>
                  Kết nối
                  <span className="btn-shine"></span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="community-section">
          <div className="community-stats-card">
            <div className="stats-header">
              <span className="stats-icon">🎓</span>
              <h3 className="stats-title">Cộng đồng Hola Match</h3>
            </div>
            <p className="stats-description">
              Hơn <strong>5.000+ sinh viên</strong> đang kết nối mỗi ngày tại
              Hola
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <span className="stat-number">2,341</span>
                  <span className="stat-label">Đang online</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">💬</span>
                <div className="stat-info">
                  <span className="stat-number">8,567</span>
                  <span className="stat-label">Tin nhắn hôm nay</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🤝</span>
                <div className="stat-info">
                  <span className="stat-number">1,234</span>
                  <span className="stat-label">Kết nối mới</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎉</span>
                <div className="stat-info">
                  <span className="stat-number">156</span>
                  <span className="stat-label">Sự kiện</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="testimonials-card">
            <h3 className="testimonials-title">
              <span className="title-icon">💭</span>
              Chia sẻ từ cộng đồng
            </h3>
            <div className="testimonial-carousel">
              <div
                className="testimonial-track"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-item">
                    <div className="testimonial-avatar">
                      {testimonial.avatar}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <span className="author-name">{testimonial.name}</span>
                      <span className="author-school">
                        {testimonial.school}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`t-dot ${
                    currentTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
