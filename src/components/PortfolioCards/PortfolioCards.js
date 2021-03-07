import React from 'react';
import {Card} from 'react-bootstrap';
import ImageCard from '../imageCard/ImageCard';

const PortfolioCards = () => {
  return(
    <div className='row'>
      <Card style={{margin: '40px 0 80px 60px'}} className='Cardbackground'>
        <Card.Title style={{margin: '25px 10px 15px 10px', borderBottom: '3px solid black'}}>Portfolio</Card.Title>
        <Card.Body>
          <h5>Click on the images to get more information about the project</h5>
          <br />
          <div className='row'>
            <ImageCard src1='/img/BonAPPvoyage.png' alt1='bonAPPvoyage site' title1='BonAPPvoyage' description1='A cooking and traveling webiste mixed in one. This site uses both the triposo and spoonacular API. The user search for recipes based on cooking time. Which, then the user can click on the type of cuisine for each recipe to see places of interest related to the cuisine.' repository1='https://github.com/UofTbootcampgroupproject/bonAPPvoyage'
            deployed1='https://uoftbootcampgroupproject.github.io/bonAPPvoyage/' src2='/img/youtwitchhomepage.png' alt2='Youtwitch' title2='Youtwitch' description2='A video website created using both the youtube and twitch API. Users, from this website can find streams from either youtube or twitch based on their searching query. Then, the user can add the stream to their favorites if they wish to watch it again later. For the databse, this websites uses mongoDB.' repository2='https://github.com/manuelleungchen/YouTwitch' deployed2='https://enigmatic-stream-39845.herokuapp.com/' />

            <ImageCard src1='/img/budget-tracker.png' alt1='Budget Tracker' title1='Budget tracker' description1='A online budget tracker created using MongoDB and mongoose. The website will keep a track of the user budget. The user can also add any budget they want when offline as it uses the browser indexedDB.' repository1='https://github.com/Jlin72/budget-tracker' deployed1='https://guarded-cliffs-40752.herokuapp.com/' src2='/img/Dashboard.png' alt2='Weather dashboard' title2='Weather Dashboard' description2='A weather dashboard app created using solely jQuery. In addition, the app uses the openweather API to obtain any weather information.' repository2='https://github.com/Jlin72/Weather-Dashboard' deployed2='https://jlin72.github.io/Weather-Dashboard/' />

            <ImageCard src1='/img/React-employee-tracker.png' alt1='Employee tracker' title1='Employee tracker' description1='A employee tracker made solely from react. The app uses an api to obtain the information for each employee. The user, can then sort the employees name by descending or ascending alphabetical order. Also, the user can use the search bar to obtain a more precise search of an employee by entering the employee first name' repository1='https://github.com/Jlin72/React-employee-tracker' deployed1='https://jlin72.github.io/React-employee-tracker/' src2='/img/burger.png' alt2='Burger app' title2='Eat Da Burger' description2='A burger app made using an ORM method for mySQL. The user in this app can track which burgers they want to eat and which burgers they have already eaten.' repository2='https://github.com/Jlin72/burger' deployed2='https://eatdaburger-jlin.herokuapp.com/' />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PortfolioCards;