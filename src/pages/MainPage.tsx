import Hero from '../components/hero/Hero'
import Advantages from "../components/advantages/Advantages";
import Catalog from "../components/catalog/Catalog";
import Form from "../components/form/Form";
import History from "../components/history/History";
import historyImg from '../components/history/img/historyMain.png'
import data from "../data/data";

const MainPage = () =>{
    return(
        <>
            <Hero/>
            <Advantages/>
            <Catalog data={data.newProducts} name="new" title="New ceramics"/>
            <Catalog data={data.popularProducts} name="popular" title="Our popular products"/>
            <Form  checkbox={false} name="main-form"/>
            <History img={historyImg} texts={{title:"From a studio in London to a global brand with\n" +"over 400 outlets",
                subtitle:['When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.','and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.']}
            } name="history" />
        </>
    )
}
export default MainPage

