// import logo from './logo.svg';

import SocialCards from "./components/SocialCards";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>

    //     </p>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     <a
    //       className="App-link"
    //       href="https://emegecalefaccion.com.ar"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       wwww.emege.com.ar
    //     </a>
    //   </header>
    // </div>

    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="lg:w-2/3 mx-auto">
          <SocialCards />
        </div>
      </div>
    </section>
  );
}

export default App;
