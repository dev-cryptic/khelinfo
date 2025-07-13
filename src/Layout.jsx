import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ChatWidget from "./components/ChatRoom/ChatWidget"

function Layout() {
  return (
    <>
      <Header />
      <ChatWidget /> {/* Floating chat bot icon */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
