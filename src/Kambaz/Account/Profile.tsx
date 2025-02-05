import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mt-3" style={{ maxWidth: "280px" }}>
      <h2 className="mb-2">Profile</h2>
      <input
        className="form-control mb-2"
        defaultValue="alice"
        placeholder="username"
      />
      <input
        className="form-control mb-2"
        defaultValue="123"
        placeholder="password"
        type="password"
      />
      <input
        className="form-control mb-2"
        defaultValue="Alice"
        placeholder="First Name"
      />
      <input
        className="form-control mb-2"
        defaultValue="Wonderland"
        placeholder="Last Name"
      />
      <input
        className="form-control mb-2"
        defaultValue="2000-01-01"
        type="date"
      />
      <input
        className="form-control mb-2"
        defaultValue="alice@wonderland"
        type="email"
      />

      <select className="form-control mb-2" defaultValue="FACULTY">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link className="btn btn-danger w-100 " to={"/Kambaz/Account/Signin"}>
        Sign out
      </Link>
    </div>
  );
}
