import { useAppSelector, useAppDispatch } from "../hooks";
import { handleChangeFielLogin } from "../features/auth/authSlice";
import Button from "../components/Button";
import AuthActions from "../features/auth/authActions";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const authActions = new AuthActions();

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.authReducer.email);
  const password = useAppSelector((state) => state.authReducer.password);

  const handleSubmitLogin = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    const resp = await dispatch(authActions.login({ email, password }));
    console.log('login page', resp);    
    if(resp.payload ===  undefined){
      alert('Il y a eu un problème');
      return;
    }
    navigate("/");
  };

  const loadding = useAppSelector((state) => state.spinnerReducer.load);

  return (
    <div>
      {loadding ? <Spinner /> : ""}
      <form
        className="bg-second p-5 rounded flex flex-col"
        onSubmit={handleSubmitLogin}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="exemple@gmail.com"
          value={email}
          onChange={(evt) =>
            dispatch(
              handleChangeFielLogin({
                value: evt.target.value,
                type: evt.target.id,
              })
            )
          }
          className="p-2 rounded h-14"
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(evt) =>
            dispatch(
              handleChangeFielLogin({
                value: evt.target.value,
                type: evt.target.id,
              })
            )
          }
          className="p-2 rounded h-14 mb-5"
        />
        <Button
          type="submit"
          text="Se connecter"
          textColor="textColor"
          textBg="evidence_2"
        />
      </form>
    </div>
  );
}

export default LoginPage;
