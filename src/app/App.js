import { Helmet } from "react-helmet";

import HomePage from "../pages/home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto"
          rel="stylesheet"
        />
      </Helmet>
      <HomePage />
    </div>
  );
}

export default App;
