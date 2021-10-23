import "./App.scss";
import Categories from "./components/Categories";
import Layout from "./components/Layout";
import { LowBanner } from "./components/LowBanner/index";
import Profile from "./components/Profile/index";

function App() {
  return (
    <Layout>
      <Profile />

      <Categories />
      <LowBanner />
    </Layout>
  );
}

export default App;
