import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

export default function MenuLogo(props) {
    return (
        <Link href="/" style={{ textDecoration: 'none' }} >
            <Box {...props}>
                <Text fontSize="lg" fontWeight="bold">
                    /home
                </Text>
            </Box>
        </Link>
    );
}