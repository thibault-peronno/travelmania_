import { useAppSelector, useAppDispatch } from "../hooks";
import { handleChangeFielLogin } from "../features/login/loginSlice";
import Button from "../components/Button";

function LoginPage() {
  const email = useAppSelector((state) => state.loginReducer.email);
  const password = useAppSelector((state) => state.loginReducer.password);
  const dispatch = useAppDispatch();

  return (
    <div>
      <form className="bg-second p-5 rounded flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="exemple@gmail.com"
          value={email}
          onChange={(evt) => dispatch(handleChangeFielLogin({value : evt.target.value, type: evt.target.id}))}
          className="p-2 rounded h-14"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(evt) =>dispatch(handleChangeFielLogin({value: evt.target.value, type: evt.target.id})) }
          className="p-2 rounded h-14 mb-5"
        />
        <Button text="Se connecter" textColor="textColor" textBg="evidence_2" />
      </form>
    </div>
  );
}

export default LoginPage;
