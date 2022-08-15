import React from 'react';
import GM from './GaurikaMalla.png';
import FG from './flag.jpg';
import SV from './Sunil Gavaskar.jpg';
import MP from './Map.png';
import SL from './Sandeep Lamichanne.jpg';
import PK from './Paras Khadka.jpg';
import RBY from './Ram Baran Yadav.jpg';
import MKN from './Madav Kumar Nepal.jpg';
import BDB from './Bidhya devi Bhandari.jpg';
import KO from './KP Oli.jpg';
import AP from './Annapurna Sanctuary.jpg';
import EBC from './Everest Base Camp.jpg';
import DF from './Davids Falls.jpg';
import PL from './Phewa lake.jpg';
import PN from './Pashupatinath.jpg';
import L from './Lumbini.jpg';
import JT from './Janaki Temple.jpg';
import BS from './Bouddhanath Stupa.jpg';
import Details from './Details';
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import Details4 from './Details4';
import Details5 from './Details5';
export default function Banner()
{
    return(
        <>
        <div>
         <h2>Our Nepal</h2>
         { Details.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
            <img align="left" src={FG} className='image' alt="" height="250px" width="580px"/> 
            <img align="right" src={MP} height="250px"  width="580px"/>

            <table width= "100%">
                <tr>
                    <th>Nepal Flag</th>
                    <td>Nepal Map</td>
                </tr>
            </table>
            <br/>
        </div>

        <div id="Before and After">
                <h2>Nepal's Comparision Video</h2>
                { Details1.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vOc41pjngy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QoRP4NYozzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <table width= "100%">
                    <tr>
                        <th>Nepal Before</th>
                        <td>Nepal After</td>
                    </tr>
                </table>
                <br/>
            </div>
    

        <div id="sport persons">
            <h2 >Sport Heros</h2>
            { Details2.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
                <img src={GM} height="200px" width="280px" className='image' alt=""/> 
                <img src={SV} height="200px" width="280px" className='image' alt=""/> 
                <img src={SL} height="200px" width="280px"/> 
                <img src={PK} height="200px"  width="280px"/>

                <table width= "100%">
                <tr>
                    <td>Gaurika Malla</td>
                    <td>Sunil Gavaskar</td>
                    <td>Sandeep Lamichanne</td>
                    <td>Paras Khadka</td>
                    
                </tr>
                </table>
                <br/>
             </div>

             <div id="political leaders">
                <h2 >Political Leaders</h2>
                { Details3.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
                    <img src={RBY} height="200px" width="300px"/> 
                    <img src={KO} height="200px"  width="300px"/>
                    <img src={MKN} height="200px" width="300px"/> 
                    <img src={BDB} height="200px"  width="300px"/>
    
                    <table width= "100%">
                    <tr>
                        <td>Ram Baran Yadav</td>
                        <td>KP Oli</td>
                        <td>Madav Kumar </td>
                        <td>Bidhya Devi Bhandari</td>
                        
                    </tr>
                    </table>
                    <br/>
                 </div>

                 <div id="natural places">
                    <h2 >Natural Places</h2>
                    { Details4.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
                        <img src={AP} height="200px" width="300px"/> 
                        <img src={DF} height="200px"  width="300px"/>
                        <img src={EBC} height="200px" width="300px"/> 
                        <img src={PL} height="200px"  width="300px"/>
        
                        <table width= "100%">
                        <tr>
                            <td>Annapurna</td>
                            <td>David fall</td>
                            <td>Everest</td>
                            <td>Phewa Lake</td>
                            
                        </tr>
                        </table>
                        <br/>
                     </div>

                     <div id="historical places">
                        <h2 >Historical places</h2>
                        { Details5.map((i)=>(
            <p align="center">{i.DetailsName}</p>
             ))}
                            <img src={PN} height="200px" width="300px"/> 
                            <img src={L} height="200px"  width="300px"/>
                            <img src={JT} height="200px" width="300px"/> 
                            <img src={BS} height="200px"  width="300px"/>
            
                            <table width= "100%">
                            <tr>
                                <td>Pashupatinath</td>
                                <td>Lumbini</td>
                                <td>Janaki Temple</td>
                                <td>Bouddhanath Stupa</td>
                                
                            </tr>
                            </table>
                            <br/>
                         </div>
        </>
    )
}

