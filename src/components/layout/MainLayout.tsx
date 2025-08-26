import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        {/* <Navbar /> */}
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet /> {/* Renders child route content */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
