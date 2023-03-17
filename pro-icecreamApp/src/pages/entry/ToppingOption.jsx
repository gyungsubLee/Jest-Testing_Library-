import Col from "react-bootstrap/Col";

export default function ToppingOption ( { name, imagePath }) {
    return(
        <Col l xs={6} sm={4} md={3} lg={2} style={{ textAlign: "center" }}>
            <img
                style={{ widows: "75" }}
                src={`http://localhost3030/${imagePath}`}
                alt={`${name} scoop`}
            />
        </Col>
    )
}