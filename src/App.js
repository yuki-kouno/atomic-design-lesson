import "./App.css";
import { Router } from "./router/Router";

const user = {
  name: "テストユーザー",
  image: "https://picsum.photos/160/160",
  email: "12345@example.com",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

function App() {
  return <Router />;
}

export default App;
