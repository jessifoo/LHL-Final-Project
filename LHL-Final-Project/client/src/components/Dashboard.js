import React from 'react';
import User from "./User";
import Notes from "./Notes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '../App.css';


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
          <Notes />
        </Stack>
      </Col>
      </Row>
    </Stack>
    </Container>
  );
}

export default Dashboard;
