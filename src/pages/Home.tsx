import Picture from "../components/Picture";
import homeImage from "../assets/images/pictures/home.png";
import Button from "../components/Button";

function Home() {
    return (
        <section className="pt-10">
            <div className="flex items-center flex-col">
                <h1 className="text-5xl font-bold mb-10 text-center"><span className="text-7xl text-evidence_1">Organise</span> ton voyage.</h1>
                <Picture src={homeImage} size="smallWidth" alt=" "/>
                <Button text="Commence l'aventure" textColor="textColor" textBg="second"/>
            </div>
        </section>
    )
}

export default Home;