import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../apiConfig/api";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) return -1;
	if (b[orderBy] > a[orderBy]) return 1;
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

export default function ProjectTabel() {
	const [order, setOrder] = useState("desc");
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false); // Control modal visibility
	const [projectToDelete, setProjectToDelete] = useState(null); // Track the project to delete
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const fetchProjects = async () => {
			try {
				const response = await axios.get(`${base_url}/project`);
				if (response.data.status) {
					setProjects(response.data.data || []);
				}
				setLoading(false);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};
		fetchProjects();
	}, []);

	const handleEdit = (project) => {
		navigate("/add-item", { state: { project } });
	};

	const handleDelete = async () => {
		if (projectToDelete) {
			try {
				await axios.delete(
					`${base_url}/project/delete?project_id=${projectToDelete._id}`
				);
				setProjects((prevProjects) =>
					prevProjects.filter((project) => project._id !== projectToDelete._id)
				);
				console.log("Property Deleted Successfully");
				setOpenModal(false); // Close modal after delete
			} catch (err) {
				console.log("Some error occurred while deleting a property");
			}
		}
	};

	const handleOpenModal = (project) => {
		setProjectToDelete(project);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setProjectToDelete(null);
	};

	return (
		<React.Fragment>
			<Sheet
				className="OrderTableContainer"
				variant="outlined"
				sx={{
					width: "100%",
					height: "60%",
					borderRadius: "sm",
					flexShrink: 1,
					overflow: "auto",
					minHeight: 0,
				}}
			>
				<Table
					aria-labelledby="tableTitle"
					stickyHeader
					hoverRow
					sx={{
						"--TableCell-headBackground":
							"var(--joy-palette-background-level1)",
						"--Table-headerUnderlineThickness": "1px",
						"--TableRow-hoverBackground":
							"var(--joy-palette-background-level1)",
						"--TableCell-paddingY": "4px",
						"--TableCell-paddingX": "8px",
						"--TableCell-fontSize": "80px",
					}}
				>
					<thead>
						<tr>
							<th style={{ width: 140, padding: "12px 6px" }}>Project Name</th>
							<th style={{ width: 140, padding: "12px 6px" }}>Area</th>
							<th style={{ width: 140, padding: "12px 6px" }}>City</th>
							<th style={{ width: 140, padding: "12px 6px" }}>Posession in</th>
							<th style={{ width: 140, padding: "12px 6px" }}>Action</th>
						</tr>
					</thead>
					<tbody>
						{projects.sort(getComparator(order, "id")).map((project) => (
							<tr key={project._id}>
								<td>
									<Typography level="title-md">
										{project.project_name}
									</Typography>
								</td>
								<td>
									<Typography level="title-md">{project.area}</Typography>
								</td>
								<td>
									<Typography level="title-md">{project.city}</Typography>
								</td>
								<td>
									<Typography level="title-md">
										{project.posess_in
											? new Date(project.posess_in).toISOString().split("T")[0]
											: ""}
									</Typography>
								</td>
								<td>
									<Dropdown>
										<MenuButton
											slots={{ root: IconButton }}
											slotProps={{
												root: {
													variant: "plain",
													color: "neutral",
													size: "sm",
												},
											}}
										>
											<MoreHorizRoundedIcon />
										</MenuButton>
										<Menu size="md" sx={{ minWidth: 140 }}>
											<MenuItem onClick={() => handleEdit(project)}>
												Edit
											</MenuItem>
											<Divider />
											<MenuItem
												color="danger"
												onClick={() => handleOpenModal(project)}
											>
												Delete
											</MenuItem>
										</Menu>
									</Dropdown>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Sheet>

			{/* Confirmation Modal */}
			{openModal && (
				<div style={modalStyles.overlay}>
					<div style={modalStyles.modal}>
						<h3>Are you sure you want to delete this project?</h3>
						<div style={modalStyles.buttons}>
							<Button onClick={handleDelete} color="danger" variant="outlined">
								Yes
							</Button>
							<Button
								onClick={handleCloseModal}
								color="neutral"
								variant="outlined"
							>
								No
							</Button>
						</div>
					</div>
				</div>
			)}

			<Box
				className="Pagination-laptopUp"
				sx={{
					pt: 2,
					gap: 1,
					display: "flex",
				}}
			>
				<Button
					size="sm"
					variant="outlined"
					color="neutral"
					startDecorator={<KeyboardArrowLeftIcon />}
					disabled
				>
					Previous
				</Button>

				<Box sx={{ flex: 1 }} />

				<Button
					size="sm"
					variant="outlined"
					color="neutral"
					endDecorator={<KeyboardArrowRightIcon />}
					disabled
				>
					Next
				</Button>
			</Box>
		</React.Fragment>
	);
}

const modalStyles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1000,
	},
	modal: {
		backgroundColor: "white",
		padding: "20px",
		borderRadius: "8px",
		textAlign: "center",
		width: "300px",
	},
	buttons: {
		display: "flex",
		justifyContent: "space-around",
	},
};
