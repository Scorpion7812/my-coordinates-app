import { useState } from "react";



export function Card(props) {
  const {brandname,product,price,symbol} = props;
  const [quty,setquty] = useState(1);
  
    function increase(){
      let quty_value=0;
      if(quty < 10)
        {   quty_value = quty+1; }
      setquty(quty_value);

    }
    function decrease(){
      let quty_value=0;
      if(quty !== 0)
        {
           quty_value = quty-1;
        }
      setquty(quty_value);
    }

     







    return (
        <div class="Card" id="crad">
           <body class="p-3 m-0 border-0 bd-example">
              <div class="card" style={{width:"18rem;"}}>
                  <div class="card-body">
                    <h5 class="card-title">{brandname}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{product}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h7 class="card-subtitle mb-2 text-muted">The {product} price is {symbol}{price}</h7><br/><br/>
                    <h8 class="card-subtitle mb-2 text-muted">Total QUTY : {quty}</h8><br/><br/>
                    <button id="increase" onClick={increase}>increase</button> <button id="decrease"onClick={decrease} >decrease</button> 
                    
                    

                  </div>
              </div>
            </body>    
        </div>

    );
    
}