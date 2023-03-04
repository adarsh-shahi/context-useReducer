import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import Provider from "./contexts/DataContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
