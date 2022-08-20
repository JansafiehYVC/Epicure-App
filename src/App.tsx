
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Layout from './components/layout/Layout';
import { setRestaurants } from './components/restaurants/restaurantSlicer'
import { fetchRestaurants } from './services/fetchRestaurants';
function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    fetch();
  }) ;
  const fetch = async () => {
    const restaurants = await fetchRestaurants() ; 
    dispatch(setRestaurants(restaurants))
  }
  return (
    <div>
      <Layout />
    </div>
  );
}
export default App;
