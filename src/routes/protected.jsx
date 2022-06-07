import Home from "../components/Home";
import Landing from "../components/offers/Landing";
import Offers from "../components/offers/Offers";
import OffersCheckout from "../components/offers/OffersCheckout";

export const protectedRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Landing /> },
      { path: ":params", element: <Offers /> },
      { path: "/offers/checkout/:id", element: <OffersCheckout /> },
      {
        path: "*",
        element: (
          <>
            <main className="p-4">
              <p>There's nothing here: 404!</p>
            </main>
          </>
        ),
      },
    ],
  },
];
