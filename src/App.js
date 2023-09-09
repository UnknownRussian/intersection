import './App.css';
import "./stylesheet.css";

function App() {
  return (
    <div className="App">
      <div id="road-design">
          <div id="road-x-design"></div>
          <div id="road-y-design"></div>
          <div id="stop-line-1"></div>
          <div id="stop-line-2"></div>
          <div id="stop-line-3"></div>
          <div id="stop-line-4"></div>
          <div id="line-1"></div>
          <div id="line-2"></div>
          <div id="line-3"></div>
          <div id="line-4"></div>
          <div id="line-5"></div>
          <div id="line-6"></div>
          <div id="line-7"></div>
          <div id="line-8"></div>
      </div>
      <div id="road">
          <div id="road-x">
              <div id="carpath-x-1">
                  <div id="car-x-1"></div>
              </div>
              <div id="carpath-x-2">
                  <div id="car-x-2"></div>
              </div>
          </div>
          <div id="road-y">
              <div id="carpath-y-1">
                  <div id="car-y-1"></div>
              </div>
              <div id="carpath-y-2">
                  <div id="car-y-2"></div>
              </div>
          </div>
          <div id="sidewalk1-1" class="sidewalk"></div>
          <div id="sidewalk1-2" class="sidewalk"></div>
          <div id="sidewalk2-1" class="sidewalk"></div>
          <div id="sidewalk2-2" class="sidewalk"></div>
          <div id="sidewalk3-1" class="sidewalk"></div>
          <div id="sidewalk3-2" class="sidewalk"></div>
          <div id="sidewalk4-1" class="sidewalk"></div>
          <div id="sidewalk4-2" class="sidewalk"></div>
      </div> 
      <div id="road-lights">
          <div id="streetLight1">
              <div id="streetLight1Red"></div>
              <div id="streetLight1Yellow"></div>
              <div id="streetLight1Green"></div>
          </div>
          <div id="streetLight2">
              <div id="streetLight2Red"></div>
              <div id="streetLight2Yellow"></div>
              <div id="streetLight2Green"></div>
          </div>
          <div id="streetLight3">
              <div id="streetLight3Red"></div>
              <div id="streetLight3Yellow"></div>
              <div id="streetLight3Green"></div>
          </div>
          <div id="streetLight4">
              <div id="streetLight4Red"></div>
              <div id="streetLight4Yellow"></div>
              <div id="streetLight4Green"></div>
          </div>
          <div id="pole-1-grid">
              <div id="pole-1"></div>
          </div>
          <div id="pole-2-grid">
              <div id="pole-2"></div>
          </div>
          <div id="pole-3-grid">
              <div id="pole-3"></div>
          </div>
          <div id="pole-4-grid">
              <div id="pole-4"></div>
          </div>
      </div>
      {driveX()}
    </div>
  );
}
export default App;


function driveX(){
  changeLight("streetLight2Red","streetLight2Yellow","streetLight2Green",true);
  changeLight("streetLight3Red","streetLight3Yellow","streetLight3Green",true);
  setTimeout(carX1Drive,500);
  setTimeout(carX2Drive,500);
  setTimeout(carX1DriveReset, 3000);
  setTimeout(carX2DriveReset, 3000);
  setTimeout(driveY,3000);
}

function driveY(){
  changeLight("streetLight1Red","streetLight1Yellow","streetLight1Green",true);
  changeLight("streetLight4Red","streetLight4Yellow","streetLight4Green",true);
  setTimeout(carX3Drive,500);
  setTimeout(carX4Drive,500);
  setTimeout(carX3DriveReset, 3000);
  setTimeout(carX4DriveReset, 3000);
  setTimeout(driveX,3000);
}

//Lane X start
function carX1Drive(){
  const path = document.getElementById("carpath-x-1");
  
  path.style.transition = '1s';
  path.style.paddingLeft = '40px';
}

function carX1DriveReset(){
  const path = document.getElementById("carpath-x-1");

  path.style.transition = '1ms';
  path.style.paddingLeft = '600px';
  changeLight("streetLight2Red","streetLight2Yellow","streetLight2Green",false);
}

function carX2Drive(){
  const path = document.getElementById("carpath-x-2");
  
  path.style.transition = '1s';
  path.style.paddingLeft = '600px';
}

function carX2DriveReset(){
  const path = document.getElementById("carpath-x-2");

  path.style.transition = '1ms';
  path.style.paddingLeft = '40px';
  changeLight("streetLight3Red","streetLight3Yellow","streetLight3Green",false);
}
//Lane X End

//Lane Y Start
function carX3Drive(){
  const path = document.getElementById("carpath-y-2");
  
  path.style.transition = '1s';
  path.style.paddingTop = '40px';
}

function carX3DriveReset(){
  const path = document.getElementById("carpath-y-2");

  path.style.transition = '1ms';
  path.style.paddingTop = '600px';
  changeLight("streetLight1Red","streetLight1Yellow","streetLight1Green",false);
}

function carX4Drive(){
  const path = document.getElementById("carpath-y-1");
  
  path.style.transition = '1s';
  path.style.paddingTop = '600px';
}

function carX4DriveReset(){
  const path = document.getElementById("carpath-y-1");

  path.style.transition = '1ms';
  path.style.paddingTop = '40px';
  changeLight("streetLight4Red","streetLight4Yellow","streetLight4Green",false);
}
//Lane Y End
function changeLight(redLightId,yellowLightId,greenLightId,changeToGreen){
  const redLight = document.getElementById(redLightId);
  const yellowLight = document.getElementById(yellowLightId);
  const greenLight = document.getElementById(greenLightId);

  if(changeToGreen){
      redLight.style.backgroundColor = 'darkred';
      greenLight.style.backgroundColor = 'greenyellow';
  }else if(!changeToGreen){
      redLight.style.backgroundColor = 'red';
      greenLight.style.backgroundColor = 'darkgreen';
  }
}