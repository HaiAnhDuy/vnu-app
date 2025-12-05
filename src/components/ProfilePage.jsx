import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // User profile data
  const [profile, setProfile] = useState({
    name: "Ung Nhu Ngoc",
    avatar:
      "https://inkythuatso.com/uploads/images/2022/03/hinh-anh-avatar-dep-cho-con-gai-dai-dien-30-14-15-58.jpg",
    university: "Đại học Quốc gia Hà Nội",
    faculty: "Quản trị Thương hiệu",
    year: "K67",
    email: "ung.nhu.ngoc@vnu.edu.vn",
    verified: true,
    bio: "📌 Đam mê xây dựng và phát triển thương hiệu. Yêu thích sáng tạo nội dung, phân tích thị trường và trải nghiệm người tiêu dùng! Luôn chủ động học hỏi và tham gia các dự án truyền thông thực tế 📊✨",

    // Academic info
    favoriteSubjects: [
      "Brand Management",
      "Marketing Căn bản",
      "Consumer Behavior",
      "Digital Branding",
    ],
    difficultSubjects: ["Tài chính doanh nghiệp", "Thống kê kinh doanh"],
    canMentor: ["Content Marketing", "Social Media", "Brand Identity cơ bản"],
    needHelp: ["Market Research chuyên sâu", "Chiến lược thương hiệu nâng cao"],

    // Connection purposes
    purposes: ["study", "project", "networking"],

    // Interests & clubs
    clubs: ["CLB Truyền thông", "CLB Marketing", "Branding Creative Team"],
    interests: [
      "Branding",
      "Content Creation",
      "Quảng cáo",
      "Nghiên cứu thị trường",
      "Thiết kế truyền thông",
    ],
    // Favorite locations
    locations: ["Thư viện trung tâm", "Quán cafe D5", "Khu Hola Events"],

    // Privacy settings
    privacy: {
      showFaculty: true,
      showYear: true,
      showPurposes: true,
      showEmail: false,
    },
  });

  const purposeOptions = [
    { id: "study", label: "Học nhóm", icon: "🤝", color: "#FF69B4" },
    { id: "mentor", label: "Mentor/Mentee", icon: "📚", color: "#FF1493" },
    { id: "dating", label: "Hẹn hò", icon: "❤️", color: "#C71585" },
    { id: "friends", label: "Kết bạn", icon: "🫂", color: "#FFB6D9" },
    { id: "event", label: "Sự kiện", icon: "🎉", color: "#E066FF" },
  ];

  const locationIcons = {
    "Thư viện trung tâm": "📚",
    "Quán cafe D5": "☕",
    "Khu Hola Events": "🎉",
    "Sân bóng rổ": "🏀",
    "Giảng đường A": "🏫",
  };

  const togglePurpose = (purposeId) => {
    setProfile((prev) => ({
      ...prev,
      purposes: prev.purposes.includes(purposeId)
        ? prev.purposes.filter((p) => p !== purposeId)
        : [...prev.purposes, purposeId],
    }));
  };

  const togglePrivacy = (key) => {
    setProfile((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: !prev.privacy[key],
      },
    }));
  };

  return (
    <div className="profile-page">
      {/* Background decoration */}
      <div className="profile-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="profile-avatar"
              />
              <div className="avatar-glow"></div>
              {profile.verified && (
                <div className="verified-badge">
                  <span className="verified-icon">✓</span>
                </div>
              )}
            </div>
            <button className="btn-change-avatar">📷 Đổi ảnh</button>
          </div>

          <div className="header-info">
            <h1 className="profile-name">{profile.name}</h1>
            <div className="profile-university">
              <span className="university-icon">🎓</span>
              <span>
                {profile.faculty} – {profile.year}
              </span>
            </div>
            <div className="profile-school">{profile.university}</div>

            {profile.verified && (
              <div className="email-verified">
                <span className="verified-check">✓</span>
                Email VNU đã xác thực
              </div>
            )}
          </div>

          <div className="header-actions">
            <button
              className="btn-edit-profile"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {isEditMode ? "💾 Lưu hồ sơ" : "✏️ Chỉnh sửa"}
            </button>
            <button
              className="btn-preview"
              onClick={() => setShowPreview(!showPreview)}
            >
              👁️ Xem góc nhìn người khác
            </button>
          </div>
        </div>

        {/* Main Content - 2 Columns */}
        <div className="profile-content">
          {/* Left Column */}
          <div className="content-left">
            {/* Bio Section */}
            <div className="profile-card bio-card">
              <div className="card-header">
                <h2>✨ Giới thiệu bản thân</h2>
              </div>
              <div className="card-content">
                {isEditMode ? (
                  <textarea
                    className="bio-input"
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    placeholder="Viết vài dòng về bản thân bạn..."
                    rows="4"
                  />
                ) : (
                  <p className="bio-text">{profile.bio}</p>
                )}
              </div>
            </div>

            {/* Academic Info */}
            <div className="profile-card academic-card">
              <div className="card-header">
                <h2>📖 Thông tin học tập</h2>
              </div>
              <div className="card-content">
                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">💕</span>
                    Môn yêu thích
                  </div>
                  <div className="tags-container">
                    {profile.favoriteSubjects.map((subject, idx) => (
                      <span key={idx} className="tag tag-favorite">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">😅</span>
                    Môn đang gặp khó khăn
                  </div>
                  <div className="tags-container">
                    {profile.difficultSubjects.map((subject, idx) => (
                      <span key={idx} className="tag tag-difficult">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">🏆</span>
                    Có thể Mentor
                  </div>
                  <div className="tags-container">
                    {profile.canMentor.map((skill, idx) => (
                      <span key={idx} className="tag tag-mentor">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">🙋</span>
                    Cần hỗ trợ
                  </div>
                  <div className="tags-container">
                    {profile.needHelp.map((topic, idx) => (
                      <span key={idx} className="tag tag-need-help">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interests & Clubs */}
            <div className="profile-card interests-card">
              <div className="card-header">
                <h2>🎨 Sở thích & Hoạt động</h2>
              </div>
              <div className="card-content">
                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">🏛️</span>
                    CLB tham gia
                  </div>
                  <div className="tags-container">
                    {profile.clubs.map((club, idx) => (
                      <span key={idx} className="tag tag-club">
                        {club}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="academic-section">
                  <div className="section-label">
                    <span className="label-icon">💫</span>
                    Sở thích
                  </div>
                  <div className="tags-container">
                    {profile.interests.map((interest, idx) => (
                      <span key={idx} className="tag tag-interest">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="content-right">
            {/* Connection Purposes */}
            <div className="profile-card purposes-card">
              <div className="card-header">
                <h2>🎯 Mục tiêu kết nối</h2>
              </div>
              <div className="card-content">
                <div className="purposes-grid">
                  {purposeOptions.map((purpose) => (
                    <div
                      key={purpose.id}
                      className={`purpose-chip ${
                        profile.purposes.includes(purpose.id) ? "active" : ""
                      }`}
                      onClick={() => isEditMode && togglePurpose(purpose.id)}
                      style={{ "--chip-color": purpose.color }}
                    >
                      <span className="purpose-icon">{purpose.icon}</span>
                      <span className="purpose-label">{purpose.label}</span>
                      {profile.purposes.includes(purpose.id) && (
                        <span className="purpose-check">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Favorite Locations */}
            <div className="profile-card locations-card">
              <div className="card-header">
                <h2>📍 Địa điểm yêu thích</h2>
              </div>
              <div className="card-content">
                <div className="locations-list">
                  {profile.locations.map((location, idx) => (
                    <div key={idx} className="location-item">
                      <span className="location-icon">
                        {locationIcons[location] || "📍"}
                      </span>
                      <span className="location-name">{location}</span>
                    </div>
                  ))}
                </div>
                {isEditMode && (
                  <button className="btn-add-location">+ Thêm địa điểm</button>
                )}
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="profile-card privacy-card">
              <div className="card-header">
                <h2>🛡️ Quyền riêng tư & Bảo mật</h2>
              </div>
              <div className="card-content">
                <div className="privacy-options">
                  <div className="privacy-item">
                    <div className="privacy-info">
                      <span className="privacy-label">Hiển thị Khoa</span>
                      <span className="privacy-hint">
                        Người khác có thể thấy khoa bạn học
                      </span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={profile.privacy.showFaculty}
                        onChange={() => togglePrivacy("showFaculty")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="privacy-item">
                    <div className="privacy-info">
                      <span className="privacy-label">Hiển thị Khóa</span>
                      <span className="privacy-hint">
                        Chia sẻ năm nhập học của bạn
                      </span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={profile.privacy.showYear}
                        onChange={() => togglePrivacy("showYear")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="privacy-item">
                    <div className="privacy-info">
                      <span className="privacy-label">
                        Hiển thị Mục tiêu kết nối
                      </span>
                      <span className="privacy-hint">
                        Cho người khác biết bạn muốn kết nối như thế nào
                      </span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={profile.privacy.showPurposes}
                        onChange={() => togglePrivacy("showPurposes")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="privacy-item">
                    <div className="privacy-info">
                      <span className="privacy-label">Hiển thị Email</span>
                      <span className="privacy-hint">
                        Chia sẻ email VNU của bạn
                      </span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={profile.privacy.showEmail}
                        onChange={() => togglePrivacy("showEmail")}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Stats */}
            <div className="profile-card stats-card">
              <div className="card-header">
                <h2>📊 Thống kê Profile</h2>
              </div>
              <div className="card-content">
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">85%</div>
                    <div className="stat-label">Hoàn thiện</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Lượt xem</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5</div>
                    <div className="stat-label">Matches</div>
                  </div>
                </div>
                <div className="completion-bar">
                  <div
                    className="completion-fill"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="completion-hint">
                  💡 Thêm sở thích và địa điểm để tăng 15% độ hoàn thiện!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="preview-modal" onClick={() => setShowPreview(false)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <div className="preview-header">
              <h3>👁️ Hồ sơ của bạn dưới góc nhìn người khác</h3>
              <button
                className="btn-close-preview"
                onClick={() => setShowPreview(false)}
              >
                ✕
              </button>
            </div>
            <div className="preview-body">
              <p className="preview-note">
                Đây là những gì người khác sẽ thấy khi xem hồ sơ của bạn
              </p>
              {/* Simplified preview of profile */}
              <div className="preview-mini-profile">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="preview-avatar"
                />
                <h4>{profile.name}</h4>
                <p>
                  {profile.faculty} – {profile.year}
                </p>
                <div className="preview-purposes">
                  {profile.purposes.map((purposeId) => {
                    const purpose = purposeOptions.find(
                      (p) => p.id === purposeId
                    );
                    return purpose ? (
                      <span key={purposeId} className="preview-purpose-tag">
                        {purpose.icon} {purpose.label}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
