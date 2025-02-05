import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={"/Kambaz/Account/Signin"}
        className="list-group-item active border border-0"
        id="wd-course-home-link"
      >
        {" "}
        Signin{" "}
      </Link>
      <Link
        to={"/Kambaz/Account/Signup"}
        className="text-danger text-decoration-none"
      >
        {" "}
        Signup{" "}
      </Link>
      <Link
        to={"/Kambaz/Account/Profile"}
        className="text-danger text-decoration-none"
      >
        {" "}
        Profile{" "}
      </Link>
    </div>
  );
}
