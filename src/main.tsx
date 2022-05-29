import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import AboutUs from "./components/AboutUs";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Offers from "./components/offers/Offers";
import OffersCheckout from "./components/offers/OffersCheckout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

console.log("main");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
