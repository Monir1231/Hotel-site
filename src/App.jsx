import React from "react";
import Header from "./Component/Header";
import  HostelCard from "./Home/Card";
import LatestCard from "./LatestCard";
import MyFeedback from "./MyFeedback";
import Avtivitie from "./Component/Avtivities";
import MyFooter from "./Component/Footer";




const App = () => {
  return (
    <>
      <Header/>
      <HostelCard/>
      <LatestCard/>
      <MyFeedback/>
     <Avtivitie/>
    <MyFooter/>
    
     
      
    </>
  )
};

export default App;
