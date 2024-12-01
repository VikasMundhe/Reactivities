//import './App.css'

import { ducks } from "./demo";
import { useEffect, useState } from "react";
import DuckItem from "./DuckItem";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  //const [count, setCount] = useState(0)
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Header as='h1' icon = 'users' content='Reactivites'></Header>
        

        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
        

        {ducks.map((duck) => (
          <DuckItem key={duck.name} duck={duck} />
        ))}
      </div>
    </>
  );
}

export default App;
