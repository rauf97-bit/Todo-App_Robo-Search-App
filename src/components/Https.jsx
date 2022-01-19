import React, {useState, useRef, useEffect} from 'react'
import { Robots } from '../containers/Robots';

const Https = () => {
  const searchInput = useRef()
  const [searchValue, setSearchValue] = useState('')
  const [robot, setRobot] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch('http://localhost:3000/robots')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setRobot(data)
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const searchChange = () => {
    let newValue = searchInput.current.value;
    setSearchValue(newValue)
  }
  const filterBots = robot.filter((bot)=> bot.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
  // console.log(filterBots)
  return (
    <div>
      <input type="search" ref={searchInput} placeholder="Search Robots" onChange={searchChange} />
      <Robots robot={filterBots}/>
      {isError && <div>Error fetching data.</div>}
    </div>
  );  
}

export default Https
