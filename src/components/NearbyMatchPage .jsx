import React, { useState } from "react";
import "./NearbyMatchPage.css";

const NearbyMatchPage = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedPurpose, setSelectedPurpose] = useState("all");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);

  // Mock data for nearby users với avatar từ API
  const nearbyUsers = [
    {
      id: 1,
      name: "Minh Anh",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Công nghệ",
      year: "Năm 3",
      area: "library",
      position: { x: 60, y: 40 },
      tags: ["Học nhóm", "Lập trình Web", "Hackathon Q1"],
      purpose: "study",
      online: true,
    },
    {
      id: 2,
      name: "Hoàng Nam",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Kinh tế",
      year: "Năm 2",
      area: "cafe",
      position: { x: 35, y: 65 },
      tags: ["Hẹn hò", "Âm nhạc", "Du lịch"],
      purpose: "dating",
      online: true,
    },
    {
      id: 3,
      name: "Thu Hà",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Ngoại ngữ",
      year: "Năm 1",
      area: "dormitory",
      position: { x: 20, y: 25 },
      tags: ["Trò chuyện", "Tiếng Anh", "Phim ảnh"],
      purpose: "chat",
      online: true,
    },
    {
      id: 4,
      name: "Đức Anh",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Công nghệ",
      year: "Năm 4",
      area: "lecture",
      position: { x: 50, y: 55 },
      tags: ["Sự kiện", "Hola Meetup", "Networking"],
      purpose: "event",
      online: false,
    },
    {
      id: 5,
      name: "Lan Phương",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Y Dược",
      year: "Năm 2",
      area: "hola",
      position: { x: 70, y: 70 },
      tags: ["Sự kiện", "Workshop Y khoa", "Học nhóm"],
      purpose: "event",
      online: true,
    },
    {
      id: 6,
      name: "Tuấn Kiệt",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      school: "ĐHQG Hà Nội",
      faculty: "Luật",
      year: "Năm 3",
      area: "library",
      position: { x: 58, y: 38 },
      tags: ["Học nhóm", "Luật quốc tế", "Tranh luận"],
      purpose: "study",
      online: true,
    },
  ];

  // Campus areas
  const campusAreas = [
    {
      id: "dormitory",
      name: "Ký túc xá",
      icon: "🏠",
      position: { x: 20, y: 25 },
      color: "#FF69B4",
    },
    {
      id: "lecture",
      name: "Giảng đường",
      icon: "🏫",
      position: { x: 50, y: 55 },
      color: "#FF1493",
    },
    {
      id: "library",
      name: "Thư viện",
      icon: "📚",
      position: { x: 60, y: 40 },
      color: "#C71585",
    },
    {
      id: "hola",
      name: "Khu Hola",
      icon: "🎉",
      position: { x: 70, y: 70 },
      color: "#FF6EC7",
    },
    {
      id: "cafe",
      name: "Quán cafe SV",
      icon: "☕",
      position: { x: 35, y: 65 },
      color: "#FFB6D9",
    },
  ];

  const purposes = [
    { id: "all", name: "Tất cả", icon: "🌟" },
    { id: "study", name: "Học nhóm", icon: "📖" },
    { id: "dating", name: "Hẹn hò", icon: "💕" },
    { id: "event", name: "Sự kiện", icon: "🎊" },
    { id: "chat", name: "Trò chuyện", icon: "💬" },
  ];

  // Filter users
  const filteredUsers = nearbyUsers.filter((user) => {
    if (onlineOnly && !user.online) return false;
    if (selectedArea !== "all" && user.area !== selectedArea) return false;
    if (selectedPurpose !== "all" && user.purpose !== selectedPurpose)
      return false;
    return true;
  });

  return (
    <div className="nearby-match-page">
      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-section">
          <label>Khu vực:</label>
          <div className="filter-buttons">
            <button
              className={selectedArea === "all" ? "active" : ""}
              onClick={() => setSelectedArea("all")}
            >
              🌍 Tất cả
            </button>
            {campusAreas.map((area) => (
              <button
                key={area.id}
                className={selectedArea === area.id ? "active" : ""}
                onClick={() => setSelectedArea(area.id)}
              >
                {area.icon} {area.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <label>Mục đích kết nối:</label>
          <div className="filter-buttons">
            {purposes.map((purpose) => (
              <button
                key={purpose.id}
                className={selectedPurpose === purpose.id ? "active" : ""}
                onClick={() => setSelectedPurpose(purpose.id)}
              >
                {purpose.icon} {purpose.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={onlineOnly}
              onChange={(e) => setOnlineOnly(e.target.checked)}
            />
            <span className="toggle-text">🟢 Chỉ người đang online</span>
          </label>
        </div>
      </div>

      {/* Main Content */}
      <div className="nearby-content">
        {/* Campus Map */}
        <div className="campus-map">
          <div className="map-container">
            <div className="map-background">
              {/* Campus areas */}
              {campusAreas.map((area) => (
                <div
                  key={area.id}
                  className={`area-marker ${
                    selectedArea === area.id ? "highlighted" : ""
                  }`}
                  style={{
                    left: `${area.position.x}%`,
                    top: `${area.position.y}%`,
                    borderColor: area.color,
                  }}
                >
                  <div className="area-icon">{area.icon}</div>
                  <div className="area-label">{area.name}</div>
                </div>
              ))}

              {/* User markers */}
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`user-marker ${
                    user.online ? "online" : "offline"
                  } ${
                    selectedUser === user.id || hoveredUser === user.id
                      ? "focused"
                      : ""
                  }`}
                  style={{
                    left: `${user.position.x}%`,
                    top: `${user.position.y}%`,
                  }}
                  onClick={() => setSelectedUser(user.id)}
                  onMouseEnter={() => setHoveredUser(user.id)}
                  onMouseLeave={() => setHoveredUser(null)}
                >
                  <div className="user-avatar">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  {user.online && <div className="pulse-ring"></div>}

                  {/* Hover popup */}
                  {hoveredUser === user.id && (
                    <div className="user-popup">
                      <div className="popup-avatar">
                        <img src={user.avatar} alt={user.name} />
                      </div>
                      <div className="popup-info">
                        <div className="popup-name">{user.name}</div>
                        <div className="popup-tags">
                          {user.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="popup-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Map decorations */}
              <div className="map-decorations">
                <div className="path path-1"></div>
                <div className="path path-2"></div>
                <div className="green-area green-1"></div>
                <div className="green-area green-2"></div>
              </div>
            </div>

            <div className="map-legend">
              <div className="legend-item">
                <span className="legend-dot online"></span> Online
              </div>
              <div className="legend-item">
                <span className="legend-dot offline"></span> Offline
              </div>
            </div>
          </div>
        </div>

        {/* User List Sidebar */}
        <div className="user-sidebar">
          <div className="sidebar-header">
            <h2>Người gần bạn</h2>
            <span className="user-count">{filteredUsers.length} người</span>
          </div>

          <div className="user-list">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className={`user-card ${
                  selectedUser === user.id ? "selected" : ""
                }`}
                onMouseEnter={() => setHoveredUser(user.id)}
                onMouseLeave={() => setHoveredUser(null)}
                onClick={() => setSelectedUser(user.id)}
              >
                <div className="user-avatar-large">
                  <img src={user.avatar} alt={user.name} />
                </div>

                <div className="user-info">
                  <div className="user-header">
                    <h3>{user.name}</h3>
                    {user.online && <span className="online-badge">🟢</span>}
                  </div>

                  <div className="user-details">
                    <span>{user.faculty}</span> • <span>{user.year}</span>
                  </div>

                  <div className="user-tags">
                    {user.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="user-location">
                    📍 {campusAreas.find((a) => a.id === user.area)?.name}
                  </div>
                </div>

                <div className="user-actions">
                  <button className="btn-connect">Kết nối</button>
                  <button className="btn-details">Chi tiết</button>
                </div>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <p>Không tìm thấy ai gần bạn</p>
                <p className="empty-hint">Thử điều chỉnh bộ lọc của bạn</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyMatchPage;
