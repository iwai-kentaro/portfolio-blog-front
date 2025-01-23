import "./App.css";
import AppRoute from "./routes/AppRoute";

function App() {
  console.log("API Base URL:", process.env.REACT_APP_API_URL);

  return <AppRoute />;
}

export default App;
