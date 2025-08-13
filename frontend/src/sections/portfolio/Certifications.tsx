

// chakra-ui
import { Box, Text } from "@chakra-ui/react";

// components
import { Card, Item } from "../../components/Card"

// images

function Certifications()
{
    return (
        <Box>
            <Text fontSize="md" marginBottom="4" color="gray.500">
                I'm working on getting some certifications, currently aiming for Cybersecurity ones. However, progress is slow as I'm going to Uni full time. 
            </Text>
            <Card title="Certifications">
                <Item
                    title="certificate name"
                    dateRange="date range"
                    // imageUrl={ibm} add image later
                    useBulletPoints={false}
                />
                
            </Card>
        </Box>
    );
}

export default Certifications;