import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { UserProvider } from "./providers/UserProvider";
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
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
