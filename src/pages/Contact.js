import React from "react";
import { Box } from "@mui/material";
import ContactForm from "../components/contact-us/ContactForm";

const Contact = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-around",
                alignItems: { sm: "start", xs: "center" },
                marginTop: 4,
            }}
        >
            <ContactForm sx={{ marginBottom: 4, width: { sm: "450%", xs: "120%" } }} />
        </Box>
    );
};

export default Contact;
