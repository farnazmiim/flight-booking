import { useState } from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* <header className="">Header</header> */}
      <main className="flex-1">
        <Search></Search>
      </main>
      {/* <footer className="">Footer</footer> */}
    </div>
  );
}

export default App;
