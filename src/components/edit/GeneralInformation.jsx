import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function GeneralInformation({ generalInfo, setGeneralInfo }) {
  console.log(generalInfo);

  function handleOnChange(e) {
    setGeneralInfo({
      ...generalInfo,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <section className="d-flex flex-column gap-2">
      <div className="section-header">
        <h2>General Information</h2>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                  placeholder="John"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                  placeholder="Doe"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  type="email"
                  placeholder="johndoe@example.com"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  type="tel"
                  placeholder="+36-30-123-4567"
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => handleOnChange(e)}
                type="text"
                placeholder="200 Some Street Scranton PA 12345 USA"
              />
            </Form.Group>
            <Form.Group className="mt-3" as={Col} controlId="about">
              <Form.Label>About</Form.Label>
              <Form.Control
                onChange={(e) => handleOnChange(e)}
                as="textarea"
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}
