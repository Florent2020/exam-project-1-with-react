import { Fragment } from "react";
import "./sass/style.scss";
import Layout from "./components/layout/Layout";
import Video from "./components/video/Video"



function App() {
	return (
      <Fragment>
        <Video />
        <Layout />
      </Fragment>
	);
}

export default App;