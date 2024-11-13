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
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { base_url } from "../../apiConfig/api";

const ControlPanel = () => {
	const [projects, setProjects] = useState([]);
	const [openDialog, setOpenDialog] = useState(false); // State for dialog
	const [selectedProject, setSelectedProject] = useState(null); // State for selected project to delete
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(`${base_url}/project`);
				setProjects(response.data.data || []);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};

		fetchProjects();
	}, []);

	const handleEdit = (project) => {
		navigate("/add-item", { state: { project } });
	};

	const handleDelete = async (projectId) => {
		try {
			await axios.delete(`${base_url}/project/delete?project_id=${projectId}`);
			setProjects((prevProjects) =>
				prevProjects.filter((project) => project._id !== projectId)
			);
			console.log("Property Deleted Successfully");
		} catch (err) {
			console.log("Some error occurred while deleting a property");
		}
		setOpenDialog(false); // Close the dialog after deletion
	};

	const handleOpenDialog = (project) => {
		setSelectedProject(project);
		setOpenDialog(true); // Open the dialog
	};

	const handleCloseDialog = () => {
		setOpenDialog(false); // Close the dialog
		setSelectedProject(null); // Clear selected project
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
											onClick={() => handleOpenDialog(project)}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={5} align="center">
									No projects available
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>

			{/* Delete Confirmation Dialog */}
			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				aria-labelledby="delete-dialog-title"
				aria-describedby="delete-dialog-description"
			>
				<DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
				<DialogContent>
					<DialogContentText id="delete-dialog-description">
						Are you sure you want to delete this project?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => handleDelete(selectedProject._id)}
						color="secondary"
						variant="contained"
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default ControlPanel;
