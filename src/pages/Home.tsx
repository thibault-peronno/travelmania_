import Picture from "../components/Picture";
import homeImage from "../assets/images/pictures/home.png";

function Home() {
    return (
        <section className="pt-10">
            <div>
                <h1 className="text-5xl font-bold"><span className="text-7xl text-evidence_1">Organise</span> ton voyage.</h1>
                <Picture src={homeImage} size=" " alt=" "/>
            </div>
        </section>
    )
}

export default Home;