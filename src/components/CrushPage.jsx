import React, { useState, useEffect } from "react";
import "./CrushPage.css";

const CrushPage = () => {
  const [crushInput, setCrushInput] = useState("");
  const [crushList, setCrushList] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const maxCrushes = 5;

  // Mock data - matches đã tìm được
  const mockMatches = [
    {
      id: 1,
      name: "Người bí ẩn A",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      faculty: "Công nghệ thông tin",
      matchedAt: new Date(),
    },
  ];

  const handleAddCrush = (e) => {
    e.preventDefault();
    if (crushInput.trim() && crushList.length < maxCrushes) {
      const newCrush = {
        id: Date.now(),
        name: crushInput.trim(),
        addedAt: new Date(),
      };
      setCrushList([...crushList, newCrush]);
      setCrushInput("");
    }
  };

  const handleRemoveCrush = (id) => {
    setCrushList(crushList.filter((crush) => crush.id !== id));
  };

  const handleSaveCrushList = () => {
    // Simulate checking for matches
    setTimeout(() => {
      if (mockMatches.length > 0) {
        setMatches(mockMatches);
        setShowMatchAnimation(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }, 500);
  };

  // Floating hearts animation
  const FloatingHeart = ({ delay }) => (
    <div className="floating-heart" style={{ animationDelay: `${delay}s` }}>
      💕
    </div>
  );

  return (
    <div className="crush-page">
      {/* Floating hearts background */}
      <div className="floating-hearts-container">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Confetti effect */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: [
                  "#FF69B4",
                  "#FF1493",
                  "#C71585",
                  "#FFB6D9",
                  "#E066FF",
                ][i % 5],
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="crush-header">
        <div className="header-content">
          <h1 className="crush-title">
            <span className="title-icon">💘</span>
            Crush Ẩn Danh
            <span className="title-icon">💘</span>
          </h1>
          <p className="crush-subtitle">
            Vũ trụ Hola đang âm thầm se duyên cho bạn
          </p>
          <div className="security-badge">
            🔒 <span>Mức bí mật: Tuyệt đối</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="crush-content">
        {/* Input Section */}
        <div className="crush-input-section">
          <div className="input-card">
            <div className="card-header">
              <h2>Danh sách Crush của bạn</h2>
              <div className="crush-counter">
                <span className="counter-number">{crushList.length}</span>
                <span className="counter-max">/ {maxCrushes}</span>
              </div>
            </div>

            <div className="input-note">
              <span className="note-icon">✨</span>
              Chỉ bạn biết danh sách này. Nếu hai bạn cùng thích nhau → Hola sẽ
              thông báo!
            </div>

            <form onSubmit={handleAddCrush} className="crush-input-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={crushInput}
                  onChange={(e) => setCrushInput(e.target.value)}
                  placeholder="Nhập tên hoặc MSSV của crush..."
                  className="crush-input"
                  disabled={crushList.length >= maxCrushes}
                />
                <button
                  type="submit"
                  className="btn-add-crush"
                  disabled={
                    crushList.length >= maxCrushes || !crushInput.trim()
                  }
                >
                  <span className="btn-icon">💗</span>
                  Thêm
                </button>
              </div>

              <div className="input-hint">
                💡 Gợi ý: Nhập tên đầy đủ hoặc mã số sinh viên
              </div>
            </form>

            {/* Crush List Tags */}
            <div className="crush-tags-container">
              {crushList.map((crush) => (
                <div key={crush.id} className="crush-tag">
                  <span className="tag-icon">💖</span>
                  <span className="tag-name">{crush.name}</span>
                  <button
                    className="tag-remove"
                    onClick={() => handleRemoveCrush(crush.id)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {crushList.length > 0 && (
              <button
                className="btn-save-crushes"
                onClick={handleSaveCrushList}
              >
                <span className="btn-glow"></span>
                💾 Lưu danh sách Crush
              </button>
            )}
          </div>

          {/* Love Meter */}
          <div className="love-meter-card">
            <h3>Crush Meter 💓</h3>
            <div className="meter-container">
              <div className="meter-bar">
                <div
                  className="meter-fill"
                  style={{ width: `${(crushList.length / maxCrushes) * 100}%` }}
                ></div>
              </div>
              <div className="meter-hearts">
                {[...Array(maxCrushes)].map((_, i) => (
                  <div
                    key={i}
                    className={`meter-heart ${
                      i < crushList.length ? "active" : ""
                    }`}
                  >
                    {i < crushList.length ? "💗" : "🤍"}
                  </div>
                ))}
              </div>
            </div>
            <p className="meter-text">
              {crushList.length === 0 && "Bắt đầu thêm crush của bạn! 💫"}
              {crushList.length > 0 &&
                crushList.length < 3 &&
                "Thêm crush để tăng cơ hội match! 🌟"}
              {crushList.length >= 3 &&
                crushList.length < 5 &&
                "Bạn đang rất nhiệt tình! 💕"}
              {crushList.length === 5 && "Danh sách đầy rồi! ❤️‍🔥"}
            </p>
          </div>
        </div>

        {/* Match Results Section */}
        <div className="match-results-section">
          {matches.length > 0 ? (
            <div
              className={`match-container ${showMatchAnimation ? "show" : ""}`}
            >
              <div className="match-header-title">
                <h2>🎉 Chúc mừng! Bạn có match! 🎉</h2>
              </div>

              {matches.map((match) => (
                <div key={match.id} className="match-card">
                  <div className="match-hearts">
                    <span className="heart-icon heart-left">💗</span>
                    <span className="heart-icon heart-center">💞</span>
                    <span className="heart-icon heart-right">💗</span>
                  </div>

                  <div className="match-avatars">
                    <div className="match-avatar you">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="You"
                      />
                      <div className="avatar-label">Bạn</div>
                    </div>
                    <div className="match-connector">
                      <div className="connector-line"></div>
                      <div className="connector-heart">💕</div>
                    </div>
                    <div className="match-avatar them">
                      <img src={match.avatar} alt={match.name} />
                      <div className="avatar-label">{match.name}</div>
                    </div>
                  </div>

                  <div className="match-message">
                    <p className="match-text">
                      Bạn và <strong>{match.name}</strong> đã thích nhau! 💘
                    </p>
                    <p className="match-subtext">{match.faculty}</p>
                  </div>

                  <div className="match-actions">
                    <button className="btn-action btn-primary">
                      💬 Gửi lời chào
                    </button>
                    <button className="btn-action btn-secondary">
                      👤 Xem Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-match-container">
              <div className="no-match-illustration">
                <div className="stars-container">
                  <span className="star">✨</span>
                  <span className="star">⭐</span>
                  <span className="star">🌟</span>
                  <span className="star">💫</span>
                </div>
                <div className="waiting-heart">💘</div>
              </div>
              <h3 className="no-match-title">Đang tìm kiếm duyên số...</h3>
              <p className="no-match-text">
                Vũ trụ Hola đang âm thầm se duyên cho bạn 💘
              </p>
              <p className="no-match-subtext">
                Chờ thêm chút nữa nhé! Tình yêu đến khi bạn không ngờ tới 💫
              </p>

              <div className="waiting-animation">
                <div className="orbit">
                  <div className="planet planet-1">💗</div>
                  <div className="planet planet-2">💕</div>
                  <div className="planet planet-3">💖</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrushPage;
