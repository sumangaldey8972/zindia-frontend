import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../apiConfig/api";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		// Fetch the projects once
		const fetchProjects = async () => {
			try {
				const response = await axios.get(`${base_url}/project`); // Replace with your API endpoint
				if (response.status) {
					setProjects(response.data.data);
				}
			} catch (e) {
				console.log("Some error occured");
			}
		};
		fetchProjects();
	}, []);

	return (
		<ProjectContext.Provider value={{ projects }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
