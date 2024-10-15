import { route } from "./routes/Route";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(route);
  return element;
}

export default App;
