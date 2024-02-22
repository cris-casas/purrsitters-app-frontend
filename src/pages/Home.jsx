import Navbar from '../components/navbar/navbar'
import './Home.css'
import Card from '../components/card/card'
import FetchCuidadores from '../components/cards/FetchCuidadores'
import Footer from '../components/footer/footer'
// import Businesscards from '../components/businesscards/businesscards'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-page">
                <h1 className="title-home">“Ronroneos felices, <br />cuidadores confiables”</h1>
                <Card />
                <div className="containes-perfiles">
                    <h2 className="title-perfiles">Conoce a Nuestro cuidadores cuidadores</h2>
                </div>
            </div>
            <section className="cards_perfiles">
                {/* <Businesscards />
                <Businesscards />
                <Businesscards /> */}
                <FetchCuidadores />
            </section>
            <Footer />
        </>
    )
}

export default Home