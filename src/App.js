import "./App.scss";
import Categories from "./components/Categories";
import { Footer } from "./components/Footer";
import FooterLink from "./components/FooterLink";
import { LowBanner } from "./components/LowBanner/index";
import { Navbar } from "./components/Navbar";
import Profile from "./components/Profile/index";

function App() {
  return (
    <div>
      <Navbar />
      <main class="main">
        <Profile />

        <Categories />
        <LowBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
