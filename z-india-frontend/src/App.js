import "./App.css";
import { ProjectProvider } from "./context/ProjectContext";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AllRoutes from "./Routes/AllRoutes";

function App() {
	return (
		<div className="App">
			{/* <LandingPage /> */}
			<ProjectProvider>
				<AllRoutes />
			</ProjectProvider>
		</div>
	);
}

export default App;
