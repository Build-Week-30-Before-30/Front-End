import React from 'react';
import './App.css';
import ActivityList from './ActivityList';
import Navigation from './Navigation';

const dummyData = [
  {
    title: 'Skydiving',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    date: '12 Jun 2020',
    category: 'Adventure',
    completed: false,
    links: ['link1', 'link2']
  },
  {
    title: 'Learn Japanese',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    date: '12 Jun 2020',
    category: 'Education',
    completed: false,
    links: ['link1', 'link2']
  },
  {
    title: 'Visit the Grand Canyon',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    date: '12 Jun 2020',
    category: 'Travel',
    completed: false,
    links: ['link1', 'link2']
  },
  {
    title: 'Go sea fishing',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    date: '12 Jun 2020',
    category: 'Adventure',
    completed: false,
    links: ['link1', 'link2']
  },
  {
    title: 'Visit the Dead Sea',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    date: '12 Jun 2020',
    category: 'Travel',
    completed: false,
    links: ['link1', 'link2']
  },
]

console.log(dummyData);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Big Thirty</h1>
      </header>
      <Navigation />
      <ActivityList activityList={dummyData}/>
    </div>
  );
}

export default App;
