import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="header__layout">Page title</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="footer__layout">Footer</footer>
    </div>
  );
}

export default App;
