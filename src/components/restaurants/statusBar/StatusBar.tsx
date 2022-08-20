import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { All  , Charts , New , Title, Status , RestStatus} from './Style' ; 


export default function StatusBar() {
 
  const restaurants = useSelector((state:any) => state.restaurants.value);
  const [restaurant , setFilteredRest] = useState() ; 
  


    const filterRest = (status:string) =>{
      const filtered = restaurants.filter((restaurant: any) => restaurant.Status.include(status))
    
    setFilteredRest(filtered)

  }

  return (
    <div>
      <Charts>
        <Title> RESTAURANTS </Title>
        <Status>
          <RestStatus onClick = {()=>{filterRest("open")}}>
            All

          </RestStatus>
        </Status>
        
      </Charts> 
    </div>
  )
}
