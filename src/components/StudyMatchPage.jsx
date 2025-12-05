import React, { useState, useEffect } from "react";
import "./StudyMatchPage.css";
import {
  subjects,
  schools,
  connectionTypes,
  studyMatches,
  smartSuggestions,
} from "../data/studyMatchData";

const StudyMatchPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedConnectionType, setSelectedConnectionType] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState("all");
  const [filteredResults, setFilteredResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [visibleSuggestions, setVisibleSuggestions] = useState(8); // Start with 8 cards
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Load more suggestions
  const loadMoreSuggestions = () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);

    // Simulate loading delay
    setTimeout(() => {
      setVisibleSuggestions((prev) => prev + 8); // Add 8 more cards each time
      setIsLoadingMore(false);
    }, 500);
  };

  // Handle search/filter
  const handleSearch = () => {
    if (!selectedSubject && selectedConnectionType === "all") {
      alert("Vui lòng chọn ít nhất một môn học hoặc loại kết nối!");
      return;
    }

    setHasSearched(true);

    let results = studyMatches;

    // Filter by subject
    if (selectedSubject) {
      results = results.filter((match) =>
        match.subjects.includes(selectedSubject)
      );
    }

    // Filter by connection type
    if (selectedConnectionType !== "all") {
      results = results.filter(
        (match) => match.connectionType === selectedConnectionType
      );
    }

    // Filter by school
    if (selectedSchool !== "all") {
      results = results.filter((match) =>
        match.school.toLowerCase().includes(selectedSchool)
      );
    }

    setFilteredResults(results);
  };

  // Reset filters
  const handleReset = () => {
    setSelectedSubject("");
    setSelectedConnectionType("all");
    setSelectedSchool("all");
    setFilteredResults([]);
    setHasSearched(false);
    setVisibleSuggestions(8); // Reset to initial count
  };

  // Connect with user
  const handleConnect = (name) => {
    alert(`Gửi lời mời kết nối đến ${name}! 💗`);
  };

  // Quick select from smart suggestions
  const handleSmartSuggestionClick = (suggestion) => {
    alert(`Xem hồ sơ của ${suggestion.name} (${suggestion.match}% phù hợp)`);
  };

  return (
    <div className="study-match-container">
      {/* Page Header */}
      <header className="study-match-header">
        <div className="header-content">
          <h1
            className="page-description"
            style={{ color: "white", fontWeight: "800", fontSize: "2rem" }}
          >
            <span className="title-icon">📚</span>
            Tìm bạn học nhóm / Mentor – Mentee
          </h1>
          <p className="page-description">
            Chọn môn học và mục tiêu của bạn để tìm người phù hợp.
          </p>
        </div>
        <div className="header-stats">
          <div className="stat-badge">
            <span className="badge-icon">👥</span>
            <div>
              <strong>247</strong>
              <span>Đang tìm bạn</span>
            </div>
          </div>
          <div className="stat-badge">
            <span className="badge-icon">🎓</span>
            <div>
              <strong>89</strong>
              <span>Mentor sẵn sàng</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Area */}
      <section className="filter-section">
        <div className="filter-header">
          <h3 className="filter-title">
            <span className="filter-icon">🔍</span>
            Bộ lọc tìm kiếm
          </h3>
          <button
            className="filter-toggle"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? "Thu gọn ▲" : "Mở rộng ▼"}
          </button>
        </div>

        <div className={`filter-content ${isFilterOpen ? "open" : "closed"}`}>
          <div className="filter-grid">
            {/* Subject Filter */}
            <div className="filter-item">
              <label className="filter-label">
                <span className="label-icon">📖</span>
                Môn học
              </label>
              <select
                className="filter-select subject-select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">-- Chọn môn học --</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.code}>
                    {subject.code} - {subject.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Connection Type Filter */}
            <div className="filter-item">
              <label className="filter-label">
                <span className="label-icon">🎯</span>
                Loại kết nối
              </label>
              <select
                className="filter-select"
                value={selectedConnectionType}
                onChange={(e) => setSelectedConnectionType(e.target.value)}
              >
                {connectionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.icon} {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* School Filter */}
            <div className="filter-item">
              <label className="filter-label">
                <span className="label-icon">🏫</span>
                Trường / Khoa
              </label>
              <select
                className="filter-select"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                {schools.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="filter-actions">
            <button className="btn-search" onClick={handleSearch}>
              <span className="btn-icon">🔍</span>
              Tìm kiếm ngay
            </button>
            <button className="btn-reset" onClick={handleReset}>
              <span className="btn-icon">🔄</span>
              Đặt lại
            </button>
          </div>
        </div>
      </section>

      {/* Smart Suggestions */}
      {!hasSearched && (
        <section className="smart-suggestions">
          <h3 className="suggestions-title">
            <span className="title-icon">✨</span>
            Gợi ý dành riêng cho bạn
          </h3>
          <div className="suggestions-grid">
            {smartSuggestions
              .slice(0, visibleSuggestions)
              .map((suggestion, index) => (
                <div
                  key={suggestion.id}
                  className="suggestion-card-mini"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleSmartSuggestionClick(suggestion)}
                >
                  <div className="mini-avatar-wrapper">
                    <img
                      src={suggestion.avatar}
                      alt={suggestion.name}
                      className="mini-avatar"
                    />
                    {suggestion.online && (
                      <span className="mini-online-dot"></span>
                    )}
                  </div>
                  <div className="mini-info">
                    <p className="mini-name">{suggestion.name}</p>
                    <p className="mini-school">
                      {suggestion.school} - {suggestion.year}
                    </p>
                    <div className="mini-match">
                      <span className="match-icon">💫</span>
                      {suggestion.match}%
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Loading indicator */}
          {isLoadingMore && (
            <div className="loading-section">
              <div className="loading-spinner"></div>
              <p>Đang tải thêm...</p>
            </div>
          )}

          {/* Show "Load More" button if not all suggestions are visible */}
          {visibleSuggestions < smartSuggestions.length * 10 &&
            !isLoadingMore && (
              <div className="load-more-section">
                <button className="btn-load-more" onClick={loadMoreSuggestions}>
                  <span className="load-more-icon">➕</span>
                  Xem thêm gợi ý
                </button>
              </div>
            )}
        </section>
      )}

      {/* Results Section */}
      {hasSearched && (
        <section className="results-section">
          {filteredResults.length > 0 ? (
            <>
              <div className="results-header">
                <h3 className="results-title">
                  Tìm thấy{" "}
                  <span className="count">{filteredResults.length}</span> kết
                  quả phù hợp
                </h3>
              </div>

              <div className="results-grid">
                {filteredResults.map((person, index) => (
                  <div
                    key={person.id}
                    className="result-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card Header */}
                    <div className="card-header">
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

                    {/* Avatar Section */}
                    <div className="card-avatar-section">
                      <div className="avatar-wrapper">
                        <img
                          src={person.avatar}
                          alt={person.name}
                          className="avatar"
                        />
                        {person.online && <span className="online-dot"></span>}
                      </div>
                    </div>

                    {/* Person Info */}
                    <div className="card-info">
                      <h4 className="person-name">{person.name}</h4>
                      <p className="person-school">{person.school}</p>
                      <p className="person-major">
                        {person.major} • {person.year}
                      </p>
                      <div className="role-badge">
                        <span className="role-icon">
                          {person.connectionType === "study-group"
                            ? "📚"
                            : person.connectionType === "find-mentor"
                            ? "🎓"
                            : "🌱"}
                        </span>
                        {person.role}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="person-bio">{person.bio}</p>

                    {/* Tags */}
                    <div className="person-tags">
                      {person.tags.map((tag, i) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {person.achievements.length > 0 && (
                      <div className="achievements">
                        <span className="achievement-icon">🏆</span>
                        <div className="achievement-list">
                          {person.achievements.map((achievement, i) => (
                            <span key={i} className="achievement">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Location */}
                    {person.nearBy && (
                      <div className="location-info">
                        <span className="location-icon">📍</span>
                        {person.location}
                      </div>
                    )}

                    {/* Connect Button */}
                    <button
                      className="btn-connect"
                      onClick={() => handleConnect(person.name)}
                    >
                      <span className="btn-icon">💗</span>
                      Kết nối ngay
                      <span className="btn-shine"></span>
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Empty State - No Results
            <div className="empty-state">
              <div className="empty-icon">😢</div>
              <h3 className="empty-title">Không tìm thấy kết quả phù hợp</h3>
              <p className="empty-description">
                Thử điều chỉnh bộ lọc hoặc chọn môn học khác nhé!
              </p>
              <button className="btn-retry" onClick={handleReset}>
                <span className="btn-icon">🔄</span>
                Thử lại
              </button>
            </div>
          )}
        </section>
      )}

      {/* Info Banner */}
      {!hasSearched && (
        <section className="info-banner">
          <div className="banner-background">
            <div className="banner-wave"></div>
            <div className="banner-wave wave-2"></div>
          </div>

          <div className="banner-content-wrapper">
            <div className="banner-icon-section">
              <div className="banner-icon-group">
                <div className="icon-box icon-box-1">
                  <span>📖</span>
                </div>
                <div className="icon-box icon-box-2">
                  <span>🤝</span>
                </div>
                <div className="icon-box icon-box-3">
                  <span>🎯</span>
                </div>
                <div className="icon-box icon-box-4">
                  <span>⭐</span>
                </div>
              </div>
            </div>

            <div className="banner-text-section">
              <h3 className="banner-title">
                Kết nối với đúng người, học tập hiệu quả hơn! 🚀
              </h3>
              <p className="banner-description">
                Chọn môn học và loại kết nối bạn mong muốn. Chúng tôi sẽ giúp
                bạn tìm được những người bạn học tập, mentor hoặc mentee phù hợp
                nhất dựa trên sở thích và mục tiêu chung.
              </p>

              <div className="banner-features">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span className="feature-text">Tìm kiếm thông minh</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💯</span>
                  <span className="feature-text">Độ phù hợp cao</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span className="feature-text">An toàn & tin cậy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default StudyMatchPage;
