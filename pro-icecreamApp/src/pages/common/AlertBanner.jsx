import { Alert } from "react-bootstrap";


export default function AlertBanner ({header, message, variant }) {
    const AlertHeader = header || "Error"
    const AlertMassage = message || "An unexpected error occurred. Please try again later.";
    const AlertVariant = variant || "danger";
    return <Alert variant={AlertVariant}>
        <Alert.Heading>{AlertHeader}</Alert.Heading>
        <p>{AlertMassage}</p>
    </Alert>
} 