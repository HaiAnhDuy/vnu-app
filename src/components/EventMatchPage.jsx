import React, { useState, useRef } from "react";
import "./EventMatchPage.css";
import { events, eventProfiles } from "../data/eventMatchData";

const EventMatchPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [currentProfiles, setCurrentProfiles] = useState(
    eventProfiles[events[0].id] || []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [showMatchPopup, setShowMatchPopup] = useState(false);
  const [lastMatchedUser, setLastMatchedUser] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const cardRef = useRef(null);

  // Handle event selection
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setCurrentProfiles(eventProfiles[event.id] || []);
    setCurrentIndex(0);
    setSwipeDirection(null);
  };

  // Handle like (swipe right)
  const handleLike = () => {
    if (currentIndex >= currentProfiles.length) return;

    const currentUser = currentProfiles[currentIndex];
    setSwipeDirection("right");

    setTimeout(() => {
      // Simulate match (50% chance)
      const isMatch = Math.random() > 0.5;

      if (isMatch) {
        setMatchedUsers([...matchedUsers, currentUser]);
        setLastMatchedUser(currentUser);
        setShowMatchPopup(true);

        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowMatchPopup(false);
        }, 3000);
      }

      setCurrentIndex(currentIndex + 1);
      setSwipeDirection(null);
    }, 300);
  };

  // Handle skip (swipe left)
  const handleSkip = () => {
    if (currentIndex >= currentProfiles.length) return;

    setSwipeDirection("left");

    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSwipeDirection(null);
    }, 300);
  };

  // Get current and next cards for stack effect
  const getCurrentCard = () => {
    return currentProfiles[currentIndex];
  };

  const getNextCard = () => {
    return currentProfiles[currentIndex + 1];
  };

  const isEndOfStack = currentIndex >= currentProfiles.length;
  const currentCard = getCurrentCard();
  const nextCard = getNextCard();

  return (
    <div className="event-match-container">
      {/* Event Selector Sidebar */}
      <div className="sidebar-wrapper">
        <aside
          className={`event-selector ${!isSidebarVisible ? "hidden" : ""}`}
        >
          <div className="event-selector-header">
            <h2 className="selector-title">
              <span className="selector-icon">🎯</span>
              Chọn sự kiện / CLB
            </h2>
            <p className="selector-subtitle">Kết nối với người cùng sở thích</p>
          </div>

          <div className="event-list">
            {events.map((event) => (
              <div
                key={event.id}
                className={`event-card ${
                  selectedEvent.id === event.id ? "active" : ""
                }`}
                onClick={() => handleEventSelect(event)}
              >
                <div className="event-card-header">
                  <span className="event-icon">{event.icon}</span>
                  {event.isLive && (
                    <span className="live-badge">
                      <span className="live-dot"></span>
                      LIVE
                    </span>
                  )}
                </div>

                <h3 className="event-name">{event.name}</h3>

                <div className="event-meta">
                  <div className="event-time">
                    <span className="meta-icon">🕐</span>
                    {event.time}
                  </div>
                  <div className="event-location">
                    <span className="meta-icon">📍</span>
                    {event.location}
                  </div>
                </div>

                <div className="event-footer">
                  <span
                    className="event-tag"
                    style={{ backgroundColor: event.tagColor }}
                  >
                    {event.tag}
                  </span>
                  <span className="event-participants">
                    <span className="participant-icon">👥</span>
                    {event.participants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Toggle Button */}
        <button
          className="btn-toggle-sidebar"
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          title={isSidebarVisible ? "Ẩn" : "Hiện"}
        >
          {isSidebarVisible ? "◀" : "▶"}
        </button>
      </div>

      {/* Main Swipe Area */}
      <main className="swipe-area">
        {/* Header Info */}
        <div className="swipe-header">
          <div className="current-event-info">
            <span className="current-event-icon">{selectedEvent.icon}</span>
            <div className="current-event-text">
              <h2 className="current-event-name">{selectedEvent.name}</h2>
              <p className="current-event-participants">
                {currentProfiles.length} người đang quan tâm
              </p>
            </div>
          </div>

          <div className="progress-indicator">
            <span className="progress-text">
              {currentIndex} / {currentProfiles.length}
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(currentIndex / currentProfiles.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Card Stack */}
        <div className="card-stack">
          {!isEndOfStack ? (
            <>
              {/* Next card (background) */}
              {nextCard && (
                <div className="swipe-card swipe-card-next">
                  <div className="card-image-section">
                    <img
                      src={nextCard.avatar}
                      alt={nextCard.name}
                      className="card-avatar"
                    />
                  </div>
                </div>
              )}

              {/* Current card */}
              {currentCard && (
                <div
                  ref={cardRef}
                  className={`swipe-card swipe-card-current ${
                    swipeDirection === "left"
                      ? "swipe-left"
                      : swipeDirection === "right"
                      ? "swipe-right"
                      : ""
                  }`}
                >
                  <div className="card-image-section">
                    <img
                      src={currentCard.avatar}
                      alt={currentCard.name}
                      className="card-avatar"
                    />
                    {currentCard.online && (
                      <div className="online-indicator">
                        <span className="online-dot"></span>
                        Online
                      </div>
                    )}
                  </div>

                  <div className="card-info-section">
                    <div className="card-main-info">
                      <h3 className="card-name">{currentCard.name}</h3>
                      <p className="card-school">
                        {currentCard.school} • {currentCard.major}
                      </p>
                      <p className="card-year">{currentCard.year}</p>
                    </div>

                    <div className="card-goal">
                      <span className="goal-icon">🎯</span>
                      <span className="goal-text">{currentCard.goal}</span>
                    </div>

                    <div className="card-tags">
                      {currentCard.tags.map((tag, index) => (
                        <span key={index} className="profile-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="card-bio">
                      <p>{currentCard.bio}</p>
                    </div>

                    <div className="match-reason">
                      <span className="reason-icon">💫</span>
                      <span className="reason-text">
                        {currentCard.matchReason}
                      </span>
                    </div>
                  </div>

                  {/* Swipe indicators */}
                  <div className="swipe-indicator swipe-indicator-left">
                    <span className="indicator-icon">❌</span>
                    <span className="indicator-text">SKIP</span>
                  </div>
                  <div className="swipe-indicator swipe-indicator-right">
                    <span className="indicator-icon">❤️</span>
                    <span className="indicator-text">LIKE</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            // End of stack
            <div className="end-of-stack">
              <div className="end-icon">🎉</div>
              <h3 className="end-title">Đã xem hết người tham gia!</h3>
              <p className="end-description">
                Hãy thử chọn sự kiện khác hoặc quay lại sau nhé
              </p>
              <button
                className="btn-change-event"
                onClick={() => handleEventSelect(events[0])}
              >
                <span className="btn-icon">🔄</span>
                Chọn sự kiện khác
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {!isEndOfStack && (
          <div className="action-buttons">
            <button className="btn-action btn-skip" onClick={handleSkip}>
              <span className="action-icon">❌</span>
              <span className="action-label">Skip</span>
            </button>

            <button className="btn-action btn-like" onClick={handleLike}>
              <span className="action-icon">❤️</span>
              <span className="action-label">Like</span>
            </button>
          </div>
        )}
      </main>

      {/* Match Success Popup */}
      {showMatchPopup && lastMatchedUser && (
        <div className="match-popup-overlay">
          <div className="match-popup">
            <div className="confetti-container">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    backgroundColor: [
                      "#e91e63",
                      "#9c27b0",
                      "#f48fb1",
                      "#ba68c8",
                    ][Math.floor(Math.random() * 4)],
                  }}
                ></div>
              ))}
            </div>

            <div className="match-content">
              <div className="match-icon-large">💗</div>
              <h2 className="match-title">It's a Match!</h2>
              <p className="match-message">
                Hai bạn đều quan tâm <strong>{selectedEvent.name}</strong>
              </p>

              <div className="match-avatars">
                <img
                  src={lastMatchedUser.avatar}
                  alt={lastMatchedUser.name}
                  className="match-avatar"
                />
                <div className="match-heart">❤️</div>
                <div className="match-avatar match-avatar-you">
                  <span>You</span>
                </div>
              </div>

              <p className="match-user-name">{lastMatchedUser.name}</p>

              <button
                className="btn-say-hi"
                onClick={() => setShowMatchPopup(false)}
              >
                <span className="btn-icon">💬</span>
                Gửi lời chào ngay
              </button>

              <button
                className="btn-keep-swiping"
                onClick={() => setShowMatchPopup(false)}
              >
                Tiếp tục tìm kiếm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventMatchPage;
