import React, {useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import ActivityList from './components/ActivityList';
import Navigation from './components/Navigation';
import { dummyData } from "./dummydata";
import BucketListForm from './components/BucketListForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import {axioswithAuth} from './Utilities/axioswithAuth';
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
      <PrivateRoute exact path='/create-event' component={BucketListForm} />
      <Route path='/register' component={RegisterForm} />
      <Route exact path='/' component={LoginForm} />
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
