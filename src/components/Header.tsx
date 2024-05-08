import Picture from "./Picture";
import { Link } from "react-router-dom";

import connectLogo from "../assets/images/icons/connexion.png";

function Header() {
  return (
      <div className="p-2.5 flex justify-between items-center">
    <nav>
       <Link to="#">Accueil</Link>
    </nav>
      <Picture src={connectLogo} size="medium" alt="se connecter" />
    </div>
  );
}

export default Header;
