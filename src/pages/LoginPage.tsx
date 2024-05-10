import { useState } from "react";
import Button from "../components/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFielLogin = (value: string, input: string) => {
    if (input === "email") {
      setEmail(value);
    }
    if (input === "password") {
      setPassword(value);
    }
  };
  return (
    <div>
      <form className="bg-second p-5 rounded flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="exemple@gmail.com"
          value={email}
          onChange={(evt) => handleChangeFielLogin(evt.target.value, "email")}
          className="p-2 rounded h-14"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(evt) =>
            handleChangeFielLogin(evt.target.value, "password")
          }
          className="p-2 rounded h-14 mb-5"
        />
        <Button text="Se connecter" textColor="textColor" textBg="evidence_2"/>
      </form>
    </div>
  );
}

export default LoginPage;
