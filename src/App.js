import logo from './logo.svg';
import './App.css';

function App() {

  fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
  .then(response => response.json())
  .then(data => console.log(data));



//   useEffect(()=>{
//     d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTwXSqlP56q78lZKxc092o6UuIyi7VqOIQj6RM4QmlVPgtJZfbgzv0a3X7wQQkhNu8MFolhVwMy4VnF/pub?gid=0&single=true&output=csv', function(data){
//       postcode.push(data.postcode)
//       population.push(data.population)
//       active.push(data.active)
//       cases.push(data.cases) 
//   })



//   useEffect(()=>{
//     console.log(postcode)
    
//   },[])
// },[])
  return (
    <div className="App">
      Hello world,
      this is FIT2101
    </div>
  );
}

export default App;
