import React from "react";
import  earth_gif from '../image/Earth_Zoom_In.gif';
import error_pic from '../image/35481.gif'; 



const hemispheresconfig = {
    North:{text:"Your in North side of earth",picture:earth_gif},
    South:{text:"Your in South side of earth",picture:earth_gif},
    error:{text:"Give Me the permission",picture:error_pic},

}

export function Hemispheres(props){
    var latitude     = props.lati;
    var longitude    = props.long;
    
    var hemisphere   = '';
    if( latitude !=='' )
    {    
        hemisphere = (latitude > 0)? 'North' : 'South';

    }else{
         hemisphere = 'error';
    }
    const  {text,picture} = hemispheresconfig[hemisphere];

    if(hemisphere !== 'error'){
        return(
            <div>
            <div className="ui success message transition ">
                <div className="ui card">
                <div className="image">
                <img src={picture} alt="Earth" />
                </div>    
                <div className="content color">
                    <a href='/' className="header"> {hemisphere}</a>
          
                    <div className="description">
                        <h1>latitude -{latitude}</h1><br/>
                        <h2>lontitude-{longitude}</h2> 
                    </div>
                    <div className="extra content">
                        <a href="/">
                            <i className="user icon"></i>
                              {text}
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
        }else{
            return(
                <div>
                <div className="ui success message transition ">
                    <div className="ui card">
                    <div className="image">
                    <img src={picture} alt="Earth" />
                    </div>    
                    <div className="content color">
                        <a href='/' className="header"> {hemisphere}</a>
              
                        <div className="description">
                            <h1>latitude -{latitude}</h1><br/>
                            <h2>lontitude-{longitude}</h2> 
                        </div>
                        <div className="extra content">
                            <a href="/">
                                <i className="user icon"></i>
                                  {text}
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )
    
        }

    
}