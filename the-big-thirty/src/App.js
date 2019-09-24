import React, {useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import ActivityList from './ActivityList';
import Navigation from './Navigation';
import { dummyData } from "./dummydata";
import BucketListForm from './components/BucketListForm';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Big Thirty</h1>
      </header>
      <Navigation onSearch={onSearch} searchTerm={searchTerm}/>
      <Route exact path='/create-event' component={BucketListForm} />
      <Route
        path='/view-events'
        render={() => <ActivityList activityList=
          {dummyData.filter(activity => activity.title.toLowerCase().includes(searchTerm.toLowerCase())
          )}/>}
      />
    </div>
  );
}

export default App;
