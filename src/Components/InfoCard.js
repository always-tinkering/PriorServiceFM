import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function InfoCard({ title, info }) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          textAlign: "center",
          backgroundColor: "#d2c484",
        }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{info}</Card.Text>
          <Button variant="outline-dark">Click</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
