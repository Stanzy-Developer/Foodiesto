import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));
const SignIn = lazy(() => import("./page/SignIn"));
const SignUp = lazy(() => import("./page/SignUp"));
const EmailConfirmation = lazy(() => import("./page/EmailConfirmation"));
const Layout = lazy(() => import("./component/Layout"));
/* import Loading from "./component/Loading"; */

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <Suspense fallback={"loading..."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="Registration"
          element={
            <Suspense fallback={"loading..."}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={"loading..."}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="sign-in"
            element={
              <Suspense fallback={"loading..."}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="email-confirmation"
            element={
              <Suspense fallback={"loading..."}>
                <EmailConfirmation />
              </Suspense>
            }
          />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
