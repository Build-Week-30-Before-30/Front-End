import React from "react";
import ActivityCard from "./ActivityCard";
import ActivityCard2 from "./ActivityCard2";
import styled from 'styled-components';

const StyledActivityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledH2 = styled.h2`
  padding: 20px;
`;

export default function ActivityList(props) {
  const { activityList } = props;
  console.log(activityList);
  return (
    <div>
      <StyledH2>Activities</StyledH2>
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

      <StyledActivityList>
        {activityList.map(activity => (
          <ActivityCard2 
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
