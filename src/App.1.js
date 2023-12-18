import React from 'react';

export function App1({ averageIncome, setAverageIncome, calculateAllowance, dailyAllowance, sickLeave, setSickLeave, calculateSickLeaveAllowance, sickLeaveAllowance, isChecked, setIsChecked, employerDays, insuranceDays, employerAnswer, insuranceAnswer, compensationTotalDays, totalAnswer, calculateTotal, calculateAll }) {
  return (
    <div className="App">
      {/* <header className="App-header">
      
             <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> UUS
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
        </header> */}


      <div className="surround">

        <div className="background1 item1">{/*1*/}
          <h1 className="pealkiri">Qalevipoeq</h1>
          <p>"Qalevipoeg" on 19. sajandil peamiselt Friedrich Reinhold Kreutzwaldi koostatud eesti rahvuseepos eesti rahvaluule ainetel.

           <mark className="highlight">"Kalevipoega"</mark>peetakse üheks eesti kirjanduse olulisemaks teoseks ning selle motiive on hiljem kasutanud mitmed kunstnikud, heliloojad ja kirjanikud. Samuti oli teosel roll eesti rahvusliku eneseteadvuse väljakujunemisel.</p>
        </div>
        <div className="background2 item2">
          <h2 className="pealkiri">Õpetatud Eesti Selts ja Faehlmann</h2>
          <p>19. sajandi alguse rahvusliku liikumise tõusulainel leidsid rahvavalgustajad, et Eesti maarahva rahvuslikku eneseteadvust aitaks turgutada teiste rahvastega võrdväärne kangelaseepos.</p>
          <ul>
           <li>Coffee</li>
           <li>Tea</li>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              <li>banana</li>
            </ul>
           <li>Milk</li>
           <li>banana</li>
          </ul>
        </div>{/*2*/}
        <div className="background3 item3 image-little">
        <img className="image-little" src="https://i.ibb.co/bBnvxWb/pilt.png" alt="Italian Trulli" ></img> {/*Aknaga pilt*/}
        </div>{/*3*/}
        

       
        <div className="item4 image-big">{/*Kalkulaatroi tabloo*/}
         <h3>Compensation<br />
         Calculator</h3>
         <div>{/*input*/}
         <form>
          <div className="input-container">
           <label>Average Income</label>
           <div className="input-container-border">
            <input typeName="number" value={averageIncome} onChange={e => setAverageIncome(e.target.value)}></input>
            <span className="static-text">€</span>
           </div>
          </div>

          <div className="input-container">
           <label>Days on sick-leave</label>
           <div className="input-container-border">
            <input typeName="number" value={sickLeave} onChange={e => setSickLeave(e.target.value)} ></input>
            <span className="static-text">days</span>
           </div>
          </div>
          
          <div className="checkbox-container">
           <input type="checkbox" id="myCheckbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} ></input>
           <label for="myCheckbox" class="checkbox-border"></label>
           <span className="label-text">I have tuberculosis</span>
          </div>

         </form>
         </div>
         
         <div>
         <button className="button" onClick={calculateAll}>Calculate</button>
         </div>

         <div className="joon"></div>

         <div className="cover">
          <div className="cover-column">
           <div className="cover-column-gap">
            <div className="cover-column-text1">The employer compensates</div>
            <div className="cover-column-text2">{employerDays} days</div>
           </div>
           <div>
            <div className="cover-column-text3">{employerAnswer}€</div>
            <div className="cover-column-text4">Daily allowance: {dailyAllowance.toFixed(2)} €</div>
           </div>
          </div>

          <div className="cover-column">
           <div className="cover-column-gap">
            <div className="cover-column-text1">Health Insurance compensates</div>
            <div className="cover-column-text2">{insuranceDays} days</div>
           </div>
           <div>
            <div className="cover-column-text3">{insuranceAnswer}€</div>
            <div className="cover-column-text4">Daily allowance {sickLeaveAllowance.toFixed(2)}  €</div>
           </div>
          </div>
         </div>

         <div className="joon"></div>

         <div className="solution">
          <div className="solution-text">Compensation total for {compensationTotalDays} days (net)</div> 
          
          <div className="solution-text-awnser">{totalAnswer}€</div>
         </div>
          

        

        </div>{/*4*/}
        <div className="background5 item5">
        </div>{/*5*/}

      </div>

    </div>
  );
}

export default App1; 
