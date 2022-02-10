import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
// styles
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const handleChangePassword = (e) => setPassword(e.traget.value);
  const handleEmailChange = (e) => setEmail(e.traget.value);
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmailChange} value={email} />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}

      {error && <p>{error}</p>}
    </form>
  );
}
