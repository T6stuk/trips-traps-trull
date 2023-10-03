export function App() {
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
          <h1>Kalevipoeg</h1>
          <p>"Kalevipoeg" on 19. sajandil peamiselt Friedrich Reinhold Kreutzwaldi koostatud eesti rahvuseepos eesti rahvaluule ainetel.

           <mark className="highlight">"Kalevipoega"</mark>peetakse üheks eesti kirjanduse olulisemaks teoseks ning selle motiive on hiljem kasutanud mitmed kunstnikud, heliloojad ja kirjanikud. Samuti oli teosel roll eesti rahvusliku eneseteadvuse väljakujunemisel.</p>
        </div>
        <div className="background2 item2">
          <h2>Õpetatud Eesti Selts ja Faehlmann</h2>
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
        <img className="image-little" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A%29_Lamav_akt_b%29_Kalev_kotka_se%2C_Oskar_Kallis%2C_EKM_j_24456-ab_M_5624-ab.jpg/440px-A%29_Lamav_akt_b%29_Kalev_kotka_se%2C_Oskar_Kallis%2C_EKM_j_24456-ab_M_5624-ab.jpg" alt="Italian Trulli" ></img>
        </div>{/*3*/}
        <div className="background4 item4 image-big">
        </div>{/*4*/}
        <div className="background5 item5">
        </div>{/*5*/}

      </div>

    </div>
  );
}
