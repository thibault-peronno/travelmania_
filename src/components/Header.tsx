import { Link } from "react-router-dom";

import Icon from "./Icon";
import connectLogo from "../assets/images/icons/connexion.png";

function Header() {
  return (
    <div className="p-2.5 flex justify-between items-center border-b-[1px] border-primary">
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
      <Link to="/login">
        <Icon src={connectLogo} size="medium" alt="se connecter" />
      </Link>
    </div>
  );
}

export default Header;
