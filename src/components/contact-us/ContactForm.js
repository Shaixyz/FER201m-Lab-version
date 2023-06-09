import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";

const ContactForm = (props) => {
    const form = React.useRef();
    return (
        <Box sx={props.sx}>
            <Typography sx={{ textAlign: "center" }} variant="h4">
                📞Contact Us
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    my: 3,
                    width: { xs: "1000%", sm: "80%" },
                    mx: "auto",
                }}
                variant="h6"
            >
                We value your feedback and are always eager to hear from our visitors.
                Whether you have a question, comment, or suggestion, we encourage you
                to get in touch with us.
            </Typography>
            <Paper elevation={3}>
                <Box
                    ref={form}
                    component="form"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        marginLeft: "4%",
                        marginBottom: "4%",
                        width: "92%",
                    }}
                >
                    <TextField
                        sx={{
                            marginTop: "5%",
                            marginBottom: "2%",
                            marginLeft: "4%",
                            width: { sm: "44%", xs: "92%" },
                        }}
                        label="Full Name"
                        name="from_name"
                        required
                        InputProps={{
                            startAdornment: (
                                <AccountCircle sx={{ color: "gray" }} fontSize="small" />
                            ),
                        }}
                    />

                    <TextField
                        sx={{
                            marginBottom: "2%",
                            marginTop: { xs: "2%", sm: "5%" },
                            marginRight: "4%",
                            marginLeft: { xs: "4%" },
                            width: { sm: "44%", xs: "92%" },
                        }}
                        type="email"
                        label="Email"
                        name="from_email"
                        required
                        InputProps={{
                            startAdornment: (
                                <AccountCircle sx={{ color: "gray" }} fontSize="small" />
                            ),
                        }}
                    />

                    <TextField
                        sx={{
                            my: "2%",
                            marginBottom: "2%",
                            marginLeft: "4%",
                            width: { sm: "44%", xs: "92%" },
                        }}
                        type="phone"
                        label="Your Phone"
                        name="from_phoneNo"
                        required
                        InputProps={{
                            startAdornment: (
                                <AccountCircle sx={{ color: "gray" }} fontSize="small" />
                            ),
                        }}
                    />

                    <TextField
                        sx={{
                            my: "2%",
                            marginBottom: "2%",
                            marginLeft: { xs: "4%" },
                            marginRight: "4%",
                            width: { sm: "44%", xs: "92%" },
                        }}
                        label="Address"
                        name="Adress"
                        required
                        InputProps={{
                            startAdornment: (
                                <AccountCircle sx={{ color: "gray" }} fontSize="small" />
                            ),
                        }}
                    />

                    <TextField
                        sx={{
                            my: "2%",
                            marginLeft: "4%",
                            marginBottom: "4%",
                            width: "92%",
                        }}
                        label="Message"
                        multiline
                        rows={4}
                        name="message"
                        required
                    />
                    <Box sx={{ width: "100%", display: "flex", marginBottom: "4%" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mx: "auto", my: { xs: "5%", sm: "0" } }}
                            size="large"
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default ContactForm;
