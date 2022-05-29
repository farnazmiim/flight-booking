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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:id" element={<OffersCheckout />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route
            path="*"
            element={
              <main className="p-4">
                <p>There's nothing here: 404!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
