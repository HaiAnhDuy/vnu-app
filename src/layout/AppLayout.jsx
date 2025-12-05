import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./AppLayout.css";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [notifications] = useState(5);

  // Mock user data
  const user = {
    name: "Nhu Ngoc",
    avatar: "👩‍🎓",
    school: "UET - VNU",
    online: true,
  };

  // Navigation items
  const navItems = [
    {
      id: "home",
      path: "/app/home",
      icon: "🏠",
      label: "Home",
      description: "Trang chủ",
    },
    {
      id: "study-match",
      path: "/app/study-match",
      icon: "📚",
      label: "Study Matches",
      description: "Tìm bạn học nhóm",
    },
    {
      id: "event-match",
      path: "/app/event-match",
      icon: "🎉",
      label: "Event Matches",
      description: "Kết nối sự kiện",
    },
    {
      id: "nearby",
      path: "/app/nearby",
      icon: "📍",
      label: "Nearby",
      description: "Gần bạn",
    },
    {
      id: "crush",
      path: "/app/crush",
      icon: "💕",
      label: "Crush",
      description: "Crush ẩn danh",
    },
    {
      id: "profile",
      path: "/app/profile",
      icon: "👤",
      label: "Profile",
      description: "Hồ sơ cá nhân",
    },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Get current page title
  const getCurrentPageTitle = () => {
    const currentNav = navItems.find((item) => item.path === location.pathname);
    return currentNav ? currentNav.label : "Hola Match";
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        {/* Logo Section */}
        <div className="sidebar-header">
          <div className="logo-section">
            {!isSidebarCollapsed && (
              <h1 className="logo-text">
                Hola <span className="logo-highlight">Match</span>
              </h1>
            )}
          </div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item-wrapper">
              <button
                className={`nav-item ${isActive(item.path) ? "active" : ""}`}
                onClick={() => handleNavigation(item.path)}
                title={isSidebarCollapsed ? item.label : ""}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isSidebarCollapsed && (
                  <div className="nav-text">
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-description">{item.description}</span>
                  </div>
                )}
                {isActive(item.path) && (
                  <span className="active-indicator"></span>
                )}
              </button>
              {isSidebarCollapsed && (
                <div className="nav-tooltip">
                  {item.label}
                  <div className="tooltip-arrow"></div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User Section at Bottom */}
        <div className="sidebar-footer">
          <div className="user-quick-info">
            <div className="user-avatar-small">
              {user.avatar}
              {user.online && <span className="status-dot"></span>}
            </div>
            {!isSidebarCollapsed && (
              <div className="user-text">
                <span className="user-name-small">{user.name}</span>
                <span className="user-school-small">{user.school}</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-wrapper">
        {/* Top Header */}
        <header className="app-header">
          <div className="header-left">
            <h2 className="page-title">{getCurrentPageTitle()}</h2>
            <div className="breadcrumb">
              <span className="breadcrumb-icon">🏠</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">
                {getCurrentPageTitle()}
              </span>
            </div>
          </div>

          <div className="header-right">
            {/* Search Bar */}
            <div className="header-search">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="search-input"
              />
            </div>

            {/* Notifications */}
            <button className="header-notification">
              <span className="notif-icon">🔔</span>
              {notifications > 0 && (
                <span className="notif-badge">{notifications}</span>
              )}
            </button>

            {/* User Profile */}
            <div className="header-user">
              <div className="user-avatar">
                {user.avatar}
                {user.online && <span className="online-dot"></span>}
              </div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-role">Sinh viên VNU</span>
              </div>
              <span className="dropdown-icon">▼</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="app-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
