import Hero from '../components/hero/Hero'
import Advantages from "../components/advantages/Advantages";
import Catalog from "../components/navigation/catalog/Catalog";
import Form from "../components/form/Form";
import History from "../components/history/History";
import data from "../data/data";

const MainPage = () =>{
    return(
        <>
            <Hero/>
            <Advantages/>
            <Catalog data={data.newProducts} name="new" title="New ceramics"/>
            <Catalog data={data.popularProducts} name="popular" title="Our popular products"/>
            <Form  checkbox={false} name="main-form"/>
            <History/>
        </>
    )


}
export default MainPage