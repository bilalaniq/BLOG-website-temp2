

// chakra-ui
import { Box, Text } from "@chakra-ui/react";

// components
import { Card, Item } from "../../components/Card";

function Accomplishments()
{
    return (
        <Box>
            <Text fontSize="md" marginBottom="4" color="gray.500">
                I don't particular have any accomplishments that I can really show off, but I'll do my best to list some of the things I've done.
            </Text>
            <Card title="Accomplishments">
                <Item
                    title="tittle of the card"
                    dateRange="data range"
                    description={[
                        "description of the accomplishment",
                    ]}
                    useBulletPoints={false}
                />
                
            </Card>
        </Box>
    );
}

export default Accomplishments;