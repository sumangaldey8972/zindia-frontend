import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { closeSidebar } from "../../utils/utlis";
import InfoIcon from "@mui/icons-material/Info";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GradingIcon from "@mui/icons-material/Grading";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
	const navigate = useNavigate();

	const handleNavigate = (router) => {
		navigate(`/${router}`);
		closeSidebar();
	};

	return (
		<Sheet
			className="Sidebar"
			sx={{
				position: { xs: "fixed", md: "sticky" },
				right: 0, // Pin sidebar to the right
				transform: {
					xs: "translateX(calc(100% * (1 - var(--SideNavigation-slideIn, 0))))",
					md: "none",
				},
				transition: "transform 0.4s, width 0.4s",
				zIndex: 10000,
				height: "100dvh",
				width: "var(--Sidebar-width)",
				top: 0,
				p: 2,
				flexShrink: 0,
				display: { sm: "flex", md: "none" },
				flexDirection: "column",
				gap: 2,
				borderLeft: "1px solid", // Border on left side
				borderColor: "divider",
				height: "auto",
				marginTop: "4rem",
				borderRadius: "0.3rem",
				fontSize: "16px",
			}}
		>
			<GlobalStyles
				styles={(theme) => ({
					":root": {
						"--Sidebar-width": "260px",
						[theme.breakpoints.up("lg")]: {
							"--Sidebar-width": "300px",
						},
					},
				})}
			/>
			<Box
				className="Sidebar-overlay"
				sx={{
					position: "fixed",
					zIndex: 9998,
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					opacity: "var(--SideNavigation-slideIn)", // Only visible when slideIn is active
					pointerEvents:
						"var(--SideNavigation-slideIn)" === "1" ? "auto" : "none", // Prevents interaction when sidebar is closed
					backgroundColor: "var(--joy-palette-background-backdrop)",
					transition: "opacity 0.4s",
					transform: {
						xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
						lg: "translateX(-100%)",
					},
				}}
				onClick={() => closeSidebar()}
			/>
			<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
				{/* <Typography level="title-lg">Z-INDIA REALTY</Typography> */}
				{/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
			</Box>
			<Box
				sx={{
					minHeight: 0,
					overflow: "hidden auto",
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					[`& .${listItemButtonClasses.root}`]: {
						gap: 1.5,
					},
				}}
			>
				<List
					size="sm"
					sx={{
						gap: 1,
						"--List-nestedInsetStart": "30px",
						"--ListItem-radius": (theme) => theme.vars.radius.sm,
					}}
				>
					<ListItem>
						<ListItemButton onClick={() => handleNavigate("")}>
							<HomeRoundedIcon sx={{ fontSize: 36 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									Home
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton onClick={() => handleNavigate("about-us")}>
							<InfoIcon sx={{ fontSize: 32 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									About Us
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton>
							<ShoppingCartRoundedIcon sx={{ fontSize: 32 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									Services
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton>
							<EngineeringIcon sx={{ fontSize: 32 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									Works
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton onClick={() => handleNavigate("testimonals")}>
							<GradingIcon sx={{ fontSize: 32 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									Testimonials
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton onClick={() => handleNavigate("login")}>
							<LoginIcon sx={{ fontSize: 32 }} />
							<ListItemContent>
								<Typography level="title-sm" sx={{ fontSize: 16 }}>
									Login
								</Typography>
							</ListItemContent>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Sheet>
	);
}
