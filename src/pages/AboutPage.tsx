import Title from "../components/title/Title";
import History from "../components/history/History";
import Advantages from "../components/advantages/Advantages";
import historyImg from '../components/history/img/historyAbout.png'
import mainHistoryImg from '../components/history/img/historyMain.png'
import Form from "../components/form/Form";

const AboutPage = () =>{
  return (  <>
        <Title/>
          <History img={mainHistoryImg} texts={{title:"From a studio in London to a global brand with\n" +"over 400 outlets",
              subtitle:['When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.','and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.']}
          } name="about-history" />
          <History img={historyImg} name="about-us" texts={{title:'Our service isn’t just personal, it’s actually\n' + 'hyper personally exquisite' , subtitle:[
                  'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.','Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
              ]}}/>
      <Advantages/>
      <Form checkbox name="about-form"/>
    </>)


}

export default AboutPage

