
// chakra-ui
import { Box } from "@chakra-ui/react";

// components
import { Card, Item } from "../../components/Card";

// images
import air_logo from "../../assets/images/logos/portfolio/air.jpeg";

function Education() {
    return (
        <Box>
            <Card title="Education">
                <Item
                    title="Bachelor of Science in Cyber Security at the Air university Islamabad"
                    dateRange="August 2023 - Present (Expected Graduation: May 2027)"
                    description={[
                        "Studying Cybersecurity at Air University, Islamabad, with hands-on exposure to modern security practices.",
                        "Gaining expertise in areas like network security, ethical hacking, and digital forensics.",
                        "Participating in real-world projects to apply cybersecurity knowledge and solve practical challenges.",
                    ]}
                    imageUrl={air_logo}
                    imageAlt="Air Logo"
                    useBulletPoints={false}
                />

            </Card>
        </Box>
    );
}

export default Education;