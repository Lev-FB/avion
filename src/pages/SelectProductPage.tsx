import SelectProduct from "../components/select/SelectProduct";
import History from "../components/history/History";
import historyImg from "../components/history/img/historyMain.png";
import Advantages from "../components/advantages/Advantages";

const selectProductPage = () =>{
    return (
        <>
            <SelectProduct/>
            <History img={historyImg} texts={{title:"From a studio in London to a global brand with\n" +"over 400 outlets",
                subtitle:['When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.','and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.']}
            } name="history" />
            <Advantages/>

        </>
    )
}

export default selectProductPage