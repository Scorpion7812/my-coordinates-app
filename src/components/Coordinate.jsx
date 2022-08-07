import React from 'react';
import { Hemispheres } from '../js/Hemisphere';
export class Coordinate  extends React.Component{
constructor(props){
    super(props);
    this.state ={
        latitude     :'',
        longitude    :'',
        time         :'',
        errorMessage :'',

    }
}

componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {this.setState({latitude:position.coords.latitude,
                                      longitude:position.coords.longitude,
                                      })},
       
        
        (error) => {this.setState({errorMessage:error.message})}
    )
    
}

// componentDidUpdate(){
//     console.log("from update");
// }

// componentWillUnmount(){
//     console.log("from unmount");
// }
render(){
    
        if(this.state.errorMessage !=='' && this.state.latitude === '')
        {
            return(  <div ><Hemispheres lati={this.state.latitude} long={this.state.longitude} err={this.state.errorMessage}/> </div>
        )
        }if(this.state.errorMessage === '' && this.state.latitude !== ''){
            return( <div>
                        <Hemispheres lati={this.state.latitude} long={this.state.longitude} err={this.state.errorMessage} />  
                    </div>     
            )
        }else{
            return(<div class="ui segment">
                        <div className="ui active huge inline loader ">
                        <p>Waiting.... </p>
                        </div>
                    </div>)
        }
        
    
    }
   




}
    
