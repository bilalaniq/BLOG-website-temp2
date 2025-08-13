
// chakra-ui
import { Box } from "@chakra-ui/react";

// components
import { Card, Item } from "../../components/Card";

function Experience() {
    return (
        <Box>
            <Card title="Experience">
                <Item
                    title="add here experience title"
                    dateRange="add here date range"
                    description={[
                        "add here experience description",
                    ]}
                    useBulletPoints={false}
                />
                
            </Card>
        </Box>
    );
}

export default Experience;
