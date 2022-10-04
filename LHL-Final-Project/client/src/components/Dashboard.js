import React from 'react';
import User from "./User";
import Notes from "./Notes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


function Dashboard() {

  return (
    <Container fluid>
      <Stack direction="horizontal" gap={3}>
      <Row>
        <Col>
          <User  />
        </Col>
      <Col>
        <Stack gap={3}>
        <div className="bg-light border">First item</div>
          <Notes />
        </Stack>
      </Col>
      </Row>
    </Stack>
    </Container>
  );
}

export default Dashboard;
