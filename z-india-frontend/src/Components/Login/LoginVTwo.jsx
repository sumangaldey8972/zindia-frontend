import React, { useState } from "react";
import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { useNavigate } from "react-router-dom";
import main_photo from "../../Assets/Main_photo.jpeg";
import { base_url } from "../../apiConfig/api";
import axios from "axios";
import Snackbars from "../../Common/ToastMessage/ToastMessage";

const customTheme = extendTheme({ defaultColorScheme: "dark" });

export default function LoginVTwo() {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toastMessage, setToastMessage] = React.useState({
		bool: false,
		message: "",
		status: "",
	});
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setToastMessage({
			bool: false,
			message: toastMessage.message,
			status: toastMessage.status,
		});
	};
	const navigate = useNavigate();

	const handleNavigate = (route) => {
		console.log("clicked", route);
		navigate(route);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		try {
			const response = await axios.post(
				`${base_url}/auth/sign-in`,
				{ email_address: email, password: password },
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log("API Response:", response.data);
			const token = JSON.stringify(response.data.user);
			localStorage.setItem("authToken", token);
			setLoading(false)
			setToastMessage({
				bool: response.data.status,
				message: response.data.message,
				status: "success",
			});
			navigate("/control-panel");
		} catch (error) {
			if (error.response) {
				console.error("Error response:", error.response.data);
				setToastMessage({
					bool: true,
					message: error.response.data.message || "Login Failed",
					status: "error",
				});
			}
			setLoading(false)
		}
	};


	const handleShowMessage = () => {
		setToastMessage({
			bool: true,
			message: 'Upcoming feature! sit back',
			status: "warning"
		})
	}

	return (
		<>
			<Snackbars
				status={toastMessage.status}
				message={toastMessage.message}
				open={toastMessage.bool}
				handleClose={handleClose}
			/>
			<CssVarsProvider theme={customTheme} disableTransitionOnChange>
				<CssBaseline />
				<GlobalStyles
					styles={{
						":root": {
							"--Form-maxWidth": "800px",
							"--Transition-duration": "0.4s", // set to `none` to disable transition
						},
					}}
				/>
				<Box
					sx={(theme) => ({
						width: { xs: "100%", md: "50vw" },
						transition: "width var(--Transition-duration)",
						transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
						position: "relative",
						zIndex: 1,
						display: "flex",
						justifyContent: "flex-end",
						backdropFilter: "blur(12px)",
						backgroundColor: "rgba(255 255 255 / 0.2)",
						[theme.getColorSchemeSelector("dark")]: {
							backgroundColor: "rgba(19 19 24 / 0.4)",
						},
					})}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							minHeight: "100dvh",
							width: "100%",
							px: 2,
						}}
					>
						{/* <Box
							component="header"
							sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
						>
							<Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
								<IconButton
									onClick={() => handleNavigate("/")}
									size="sm"
									variant="soft"
								>
									<MapsHomeWorkIcon />
								</IconButton>
								<Typography
									sx={{
										fontWeight: "xl",
										color: "#00215b",
										fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)",
									}}
								>
									Z-INDIA REALTY
								</Typography>
							</Box>
						</Box> */}
						<Box
							component="main"
							sx={{
								my: "auto",
								py: 2,
								pb: 5,
								display: "flex",
								flexDirection: "column",
								gap: 2,
								width: 400,
								maxWidth: "100%",
								mx: "auto",
								borderRadius: "sm",
								"& form": {
									display: "flex",
									flexDirection: "column",
									gap: 2,
								},
								[`& .MuiFormLabel-asterisk`]: {
									visibility: "hidden",
								},
							}}
						>
							<Stack sx={{ gap: 4, mb: 2 }}>
								<Stack sx={{ gap: 1 }}>
									<Typography component="h1" level="h3">
										Admin Sign in
									</Typography>
									{/* <Typography level="body-sm">
                                    New to company?{' '}
                                    <Link href="#replace-with-a-link" level="title-sm">
                                        Sign up!
                                    </Link>
                                </Typography> */}
								</Stack>
								{/* <Button
                                variant="soft"
                                color="neutral"
                                fullWidth
                            // startDecorator={<GoogleIcon />}
                            >
                                Continue with Google
                            </Button> */}
							</Stack>
							<Divider
								sx={(theme) => ({
									[theme.getColorSchemeSelector("light")]: {
										color: { xs: "#FFF", md: "text.tertiary" },
									},
								})}
							></Divider>
							<Stack sx={{ gap: 4, mt: 2 }}>
								<form onSubmit={handleSubmit}>
									<FormControl required>
										<FormLabel>Email</FormLabel>
										<Input
											type="email"
											name="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormControl>
									<FormControl required>
										<FormLabel>Password</FormLabel>
										<Input
											type="password"
											name="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormControl>
									<Stack sx={{ gap: 4, mt: 2 }}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "end",
											}}
										>
											{/* <Checkbox size="sm" label="Remember me" name="persistent" /> */}
											<Link
												level="title-sm"
												sx={{ color: "#f45906" }}
												href="#replace-with-a-link"
												onClick={handleShowMessage}
											>
												Forgot your password?
											</Link>
										</Box>
										<Button
											sx={{ backgroundColor: "#01215c" }}
											type="submit"
											fullWidth
											loading={loading}
										>
											Sign in
										</Button>
									</Stack>
								</form>
							</Stack>
						</Box>
						<Box component="footer" sx={{ py: 3 }}>
							<Typography level="body-xs" sx={{ textAlign: "center" }}>
								© Z-INDIA-REALTY {new Date().getFullYear()} | Made By Cyrus Web
								Services {new Date().getFullYear()}
								<br />- All Copy rights reserved -
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={(theme) => ({
						height: "100%",
						position: "fixed",
						right: 0,
						top: 0,
						bottom: 0,
						left: { xs: 0, md: "50vw" },
						transition:
							"background-image var(--Transition-duration), left var(--Transition-duration) !important",
						transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
						backgroundColor: "background.level1",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundImage: `url(${main_photo})`,
					})}
				/>
			</CssVarsProvider>
		</>
	);
}
