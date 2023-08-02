import Home from "./page/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import EmailConfirmation from "./page/EmailConfirmation";
import Layout from "./component/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Registration" element={<Layout />}>
          <Route index element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="email-confirmation" element={<EmailConfirmation />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
