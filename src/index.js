import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import reportWebVitals from './reportWebVitals'; // This is for performance testing right?

import profilePicture from './displayPicture.jpg';

// importing from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const user = {
  name: 'Darren',
  surname: 'Nelson',
  dob: '21 May 1997',
  country: 'South Africa',
  email: 'nelson.darrenp10.dnp@gmail.com',
  telephone: '071-482-4330',
  company: 'Edge Education',
  profilePicture: profilePicture,
  interests: ['soccer', 'hiking', 'surfing', 'clubbing', 'gaming', 'camping']
};

const returnInfo = (key) => {
  let info = user[key];
  let informationOutput = document.getElementById('informationOutput');

  let renderInfo = '';

  if (typeof info === 'object') {
    renderInfo = (
      <ul className="interestList">
        {Object.values(info).map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    );
  } else if (key === 'profilePicture') {
    renderInfo = (
      <img src={info} alt="{Profile picture of Darren Nelson}"></img>
    );
  } else {
    renderInfo = info;
  }

  ReactDOM.render(renderInfo, informationOutput);
};

const buttons = (
  <div>
    <div className="buttonContainer">
      {Object.keys(user).map((value, key) => (
        <Button
          variant="secondary"
          onClick={(e) => returnInfo(value, e)}
          key={key}
        >
          {value}
        </Button>
      ))}
    </div>

    <div id="informationOutput" className="informationOutput">
      Hello World, click a button above to find out more about the user...
    </div>
  </div>
);

ReactDOM.render(buttons, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
