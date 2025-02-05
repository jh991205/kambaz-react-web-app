import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="container mt-3" style={{ maxWidth: "280px" }}>
      <h2 className="mb-2">Signin</h2>
      <input className="form-control mb-2" placeholder="username" />{" "}
      <input
        className="form-control mb-2"
        placeholder="password"
        type="password"
      />{" "}
      <Link to="/Kambaz/Dashboard" className="btn btn-primary w-100">
        Signin
      </Link>
      <Link className="text-primary" to={"/Kambaz/Account/Signup"}>
        Signup
      </Link>
    </div>
  );
}
