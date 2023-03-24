import Alert from "react-bootstrap/Alert";


export default function AlertBanner ({header, message, variant }) {
    const AlertHeader = header || "Error"
    const AlertMassage = message || "An unexpected error occurred. Please try again later.";
    const AlertVariant = variant || "danger";

    return <Alert variant={AlertVariant} style={{ backgroundColor: 'red', padding:'10px', margin:'10px'}}>
        <Alert.Heading>{AlertHeader}</Alert.Heading>
        <p>{AlertMassage}</p>
    </Alert>
} 