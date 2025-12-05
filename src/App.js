import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import HomePage from "./components/HomePage";
import AppLayout from "./layout/AppLayout";
import StudyMatchPage from "./components/StudyMatchPage";
import EventMatchPage from "./components/EventMatchPage";
import NearbyMatchPage from "./components/NearbyMatchPage ";
import CrushPage from "./components/CrushPage";
import ProfilePage from "./components/ProfilePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes with AppLayout */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route
            path="study-match"
            element={
              <div>
                <StudyMatchPage />
              </div>
            }
          />
          <Route
            path="event-match"
            element={
              <div>
                <h2>🎉 Event Matches</h2>
                <EventMatchPage />
              </div>
            }
          />
          <Route
            path="nearby"
            element={
              <div>
                <NearbyMatchPage />
              </div>
            }
          />
          <Route
            path="crush"
            element={
              <div>
                <CrushPage />
              </div>
            }
          />
          <Route
            path="profile"
            element={
              <div>
                <ProfilePage />
              </div>
            }
          />
          <Route
            path="settings"
            element={
              <div
                style={{
                  padding: "40px",
                  background: "white",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <h2>⚙️ Settings</h2>
                <p>Cài đặt - Coming soon!</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
