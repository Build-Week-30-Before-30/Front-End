import React from "react";
import ActivityCard from "./ActivityCard";
import styled from 'styled-components';

const StyledActivityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ActivityList(props) {
  const { activityList } = props;
  console.log(activityList);
  return (
    <div>
      <h2>Activities</h2>
      <StyledActivityList>
        {activityList.map(activity => (
          <ActivityCard 
            key={activity.title}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            category={activity.category}
            completed={activity.completed}
          />
        ))}
      </StyledActivityList>
    </div>
  );
}
