import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import Container from "../components/Container";
const ContactPage = () => {
    return <Layout>
        <Container>
        <Heading level={1} textAlign="center">Contact Us</Heading>
        <Paragraph>Lookng to buy a subaru car or SUV? Customize your perfect Subaru vehicle with our tools. Choose models, trims, and colors. Build yours today!</Paragraph>
        </Container>
    </Layout>
}

export default ContactPage;