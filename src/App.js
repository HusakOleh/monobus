import React from "react";
import './utils/_reset.scss';
import './App.scss';
import Home from "./pages/Home";

import { routes} from "./utils/Data/Data";
import { cities } from "./utils/Data/Data";

export const routesExtended = routes.map(rtEx => {
  const route = {...rtEx};

  route.stations = route.stations.map(stEx => {
    return {
      ...stEx,
      cityInfo: cities.find(city => city.cityLatin === stEx.city),

    }
  });

  if (route.hasOwnProperty("fork")) {
    route.fork = route.fork.map(fr => {
      return fr.map(st => {
        return {
          ...st,
          cityInfo: cities.find(city => city.cityLatin === st.city)
        }
      })
    })
  }




  return route;
});

// console.log(routesExtended);

function App() {
  return (
    <div
      className="App"
    >
      <Home/>
    </div>
  );
}

export default App;
