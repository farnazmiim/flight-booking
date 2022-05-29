import { Outlet } from "react-router-dom";

export default function Home() {
  console.log("home");
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="header__layout">Header</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="footer__layout">Footer</footer>
    </div>
  );
}
