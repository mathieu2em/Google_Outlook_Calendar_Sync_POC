// DISCLAIMER :

// THIS CODE IS NOTE PRODUCTION READY NOR REPRESENT GOOD CODING PRACTICES

// THE PURPOSE OF THIS CODE IS TO DEMONSTRATE FEASABILITY OF SOME DESIRED FEATURES

// DO NOT USE THIS CODE AS CODEBASE AND DO NOT SEE THIS CODE AS GOOD CODE

// THIS CODE DOEST NOT RESPECT GOOD PRACTICES AND IS CODED AS FAST AS POSSIBLE WITHOUT ANY CONCERN FOR ANYTHING OTHER THAN FUNCTIONALITY
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarPage from "./CalendarPage";
import EventPage from "./EventPage";

const App: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarPage token={token} />} />
        <Route
          path="/calendar/:calendarId/event/:eventId/edit"
          element={<EventPage token={token} />}
        />
        <Route
          path="/calendar/:calendarId/event/create"
          element={<EventPage token={token} />}
        />
        <Route
          path="/"
          element={
            <div className="App">
              <button onClick={() => (window.location.href = "/api/auth")}>
                Connect to Google Calendar
              </button>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
