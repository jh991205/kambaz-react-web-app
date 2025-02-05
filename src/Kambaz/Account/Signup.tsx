import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container mt-3" style={{ maxWidth: "280px" }}>
      <h2 className="mb-2">Signup</h2>
      <input className="form-control mb-2" placeholder="username" />{" "}
      <input
        className="form-control mb-2"
        placeholder="password"
        type="password"
      />{" "}
      <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100">
        Signup
      </Link>
      <Link className="text-primary" to="/Kambaz/Account/Signin">
        Signin
      </Link>
    </div>
  );
}
