import React from "react";
import Findbanner from "../components/Findbanner";
import Findcard from "../components/Findcard";
import Findbrands from "../components/Findbrands";
import Findbanner2 from "../components/Findbanner2";
import Findbanner3 from "../components/Findbanner3";
import Findfooter from "../components/Findfooter";
import Findslider from "../components/Findslider";
import Gmaps from "../components/Gmaps";
import Findlocation from "../components/Findlocation";
import Findlocationhor from "../components/Findlocationhor";
// import { useJsApiLoader } from '@react-google-maps/api';
// import { mapoptions } from "../components/Mapconfiguration";




const Findstudio = () => {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: mapoptions.googleMapApiKey
    // })
    return (
        <div>
            <Findbanner />         {/*Banner component in find studio page */}
            <Findlocation/>        {/*google map component in find studio page */}
            <Findlocationhor/>     {/*google map component for mobile screens in find studio page */}
            <Findcard />           {/*Why Visit Us? component in find studio page */}
            <Findbrands />         {/*Book A Free Consultation component in find studio page*/}
            <Findbanner2 />        {/*subbanner component in find studio page */}
            <Findslider />         {/*tslider images component in find studio page*/}
            <Findbanner3 />        {/*sub-divided-banner component in find studio page*/}
            <Findfooter />         {/*Footer component in find studio page*/}
           
          




        </div>
    )
}

export default Findstudio;