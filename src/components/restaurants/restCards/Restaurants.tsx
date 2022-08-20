import React from 'react'
import { useSelector } from 'react-redux';
import {Name , Chef , Box , NameChef ,  Card} from './Style' ;
export default function Restaurants() {
const restaurants = useSelector((state:any) => state.restaurants.value);
  return (
    <Box>
            {restaurants.map((restaurant:any) => (
                <Card>
                        <img className='img' src={restaurant.pic} alt=""></img>
                        <NameChef>
                    <Name> {restaurant.name} </Name>
                    <Chef> {restaurant.chef} </Chef>
                    </NameChef>
                </Card>
            ))}
    </Box>
  )
}
