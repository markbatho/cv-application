import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function GeneralInformation({ generalInfo, setGeneralInfo }) {
  function handleOnChange(e) {
    setGeneralInfo({
      ...generalInfo,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setGeneralInfo({
      ...generalInfo,
      isValid: true,
    });
  }

  function handleEdit() {
    setGeneralInfo({
      ...generalInfo,
      isValid: false,
    });
  }

  return (
    <section className="d-flex flex-column gap-2">
      <div className="section-header">
        <h2>General Information</h2>
      </div>
      <Card>
        <Card.Header>General Information</Card.Header>
        <Card.Body>
          <Form id="general-info-form" onSubmit={(e) => handleSubmit(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  value={generalInfo.firstName}
                  type="text"
                  placeholder="John"
                  required
                  disabled={generalInfo.isValid ? true : false}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  value={generalInfo.lastName}
                  type="text"
                  placeholder="Doe"
                  required
                  disabled={generalInfo.isValid ? true : false}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  value={generalInfo.email}
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  disabled={generalInfo.isValid ? true : false}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onChange={(e) => handleOnChange(e)}
                  value={generalInfo.phone}
                  type="tel"
                  placeholder="+36-30-123-4567"
                  required
                  disabled={generalInfo.isValid ? true : false}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => handleOnChange(e)}
                value={generalInfo.address}
                type="text"
                placeholder="200 Some Street Scranton PA 12345 USA"
                required
                disabled={generalInfo.isValid ? true : false}
              />
            </Form.Group>
            <Form.Group className="mt-3" as={Col} controlId="about">
              <Form.Label>About</Form.Label>
              <Form.Control
                onChange={(e) => handleOnChange(e)}
                value={generalInfo.about}
                as="textarea"
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
                required
                disabled={generalInfo.isValid ? true : false}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button
            form="general-info-form"
            type="submit"
            variant="outline-success"
          >
            Save
          </Button>
          <Button
            className="mx-2"
            onClick={handleEdit}
            variant="outline-warning"
          >
            Edit
          </Button>
        </Card.Footer>
      </Card>
    </section>
  );
}
