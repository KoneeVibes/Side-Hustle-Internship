import './App.css';
import Colleagues from "./Colleagues.json"

function App() {
  // converting a JSON data to an javascript object

  // This is a sample of a JSON data;
  const colleagueJSONData = `{
    "name": "Ukeme Silas",
    "age": 24,
    "position": "Director of Information",
    "married": true
  }`

  // conversion method;
  const JSObject = JSON.parse(colleagueJSONData)
  console.log(JSObject)

  // converting a JS object to JSON

  // This is a sample of a JS object;
  const colleagueJSObject = {
    name: "Ukeme Silas",
    age: 24,
    position: "Director of Information",
    married: true
  }

  // conversion method;
  const JSONData = JSON.stringify(colleagueJSObject);
  console.log(JSONData)

  // fetching APIs

  const fetcher = async () => {

    const fetched = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(fetch => fetch.json());
    
      return Array.from(fetched).map(obj => {
      // console.log(typeof obj.title)
      return <h1>{obj.title}</h1>
    })
  }

  fetcher()

  return (
    <div className="App">
      <h1>The following people are the most active exco members in no particular order</h1>
      <div>
        {/* I don't know why the below shouldn't work! */}
       
          {/* {fetcher()} */}
        
      </div>
      
      <ul>
        
        { 
          Colleagues.map(colleague => {
            return <li>{colleague.name}</li>
          })
        }

      </ul>
    </div>
  );
}

export default App;
