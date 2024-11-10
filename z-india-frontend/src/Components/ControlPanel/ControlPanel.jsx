import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Box,
	Typography,
} from "@mui/material";

const ControlPanel = () => {
	const [projects, setProjects] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"https://z-india-backend.onrender.com/project"
				); // Replace with your API endpoint
				setProjects(response.data.data || []);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};

		fetchProjects();
	}, []);

	const handleEdit = (project) => {
		console.log("Edit project:", project);
		navigate("/add-item", { state: { project } });
		// Implement edit functionality here
	};

	const handleDelete = (projectId) => {
		console.log("Delete project:", projectId);
		// Implement delete functionality here
	};

	return (
		<Box sx={{ maxWidth: 1200, margin: "auto", marginTop: 4 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 2,
				}}
			>
				<Typography variant="h6">Project Control Panel</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={() => navigate("/add-item")}
				>
					Add New Project
				</Button>
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Project Name</TableCell>
							<TableCell>Project ID</TableCell>
							<TableCell>Area</TableCell>
							<TableCell>City</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.isArray(projects) && projects.length > 0 ? (
							projects.map((project) => (
								<TableRow key={project._id}>
									<TableCell>{project.project_name}</TableCell>
									<TableCell>{project._id}</TableCell>
									<TableCell>{project.area}</TableCell>
									<TableCell>{project.city}</TableCell>
									<TableCell>
										<Button
											variant="contained"
											color="primary"
											onClick={() => handleEdit(project)}
											sx={{ marginRight: 1 }}
										>
											Edit
										</Button>
										<Button
											variant="contained"
											color="secondary"
											onClick={() => handleDelete(project._id)}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={3} align="center">
									No projects available
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default ControlPanel;
