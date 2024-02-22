

import './Home.css'
import Card from '../components/card/card'
import Businesscards from '../components/businesscards/businesscards'

const Home = () => {
    return (
        <>
            
            <div className="home-page">
                <h1 className="title-home">“Ronroneos felices, cuidadores confiables”</h1>
                <Card />
                <div className="containes-perfiles">
                    
                    <h2 className="title-perfiles">Conoce a Nuestro cuidadores cuidadores</h2>
                    
                    
                    
                </div>

                

            </div>
            <section className="cards_perfiles">
                <Businesscards />
                <Businesscards />
                <Businesscards />
            </section>
            

        </>
    )
}

export default Home