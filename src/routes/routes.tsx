import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { routeGenerator } from "../utils/routesGenetator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
("./admin.routes");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
