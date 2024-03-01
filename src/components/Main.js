import './Main.css'

import Header from './Header'
import Hero from './Hero'
import Destinations from './Destinations'
import Packages from './Packages'
import Contact from './Testimonials'
import Testimonials from './Testimonials'
import Footer from './Footer'
function Main(){
    return (
    <div>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Raleway" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Header />
        <Hero />
        <Destinations />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />

    </div>)
}

export default Main