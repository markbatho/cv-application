import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

let workID = 0;

export default function Work({ work, setWork }) {
  function handleClick() {
    setWork([
      ...work,
      {
        id: workID++,
        companyName: '',
        positionTitle: '',
        tasks: '',
        startDate: '',
        endDate: '',
        isValid: false,
      },
    ]);
  }

  function handleOnChange(e, itemId) {
    const workArr = work.map((item) => {
      if (item.id === itemId) {
        return { ...item, [e.target.id]: e.target.value };
      }

      return item;
    });

    setWork(workArr);
  }

  function handleSubmit(e, itemId) {
    e.preventDefault();

    const workArr = work.map((item) => {
      if (item.id === itemId) {
        return { ...item, isValid: true };
      }

      return item;
    });

    setWork(workArr);
  }

  function handleEdit(e, itemId) {
    const workArr = work.map((item) => {
      if (item.id === itemId) {
        return { ...item, isValid: false };
      }

      return item;
    });

    setWork(workArr);
  }

  function handleDelete(e, itemId) {
    const workArr = work.slice();
    const index = workArr.findIndex((elem) => {
      if (elem.id === itemId) return true;
      return false;
    });

    if (index > -1) workArr.splice(index, 1);

    setWork(workArr);
  }

  return (
    <section className="d-flex flex-column gap-3">
      <div className="section-header d-flex justify-content-between">
        <h2>Work Experience</h2>
      </div>
      {work &&
        work.map((item) => {
          return (
            <Card key={item.id}>
              <Card.Header>Company</Card.Header>
              <Card.Body>
                <Form
                  id={'workform-' + item.id}
                  onSubmit={(e) => handleSubmit(e, item.id)}
                >
                  <Form.Group className="mb-3" as={Col} controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.companyName}
                      type="text"
                      placeholder="Meta, Inc"
                      required
                      disabled={item.isValid ? true : false}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="positionTitle"
                  >
                    <Form.Label>Position Title</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.positionTitle}
                      type="text"
                      placeholder="Frontend Developer"
                      required
                      disabled={item.isValid ? true : false}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} controlId="tasks">
                    <Form.Label>Main Tasks</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.tasks}
                      type="text"
                      placeholder="Figma to React conversion on a large project"
                      required
                      disabled={item.isValid ? true : false}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="startDate">
                      <Form.Label>Start date</Form.Label>
                      <Form.Control
                        onChange={(e) => handleOnChange(e, item.id)}
                        value={item.startDate}
                        type="date"
                        required
                        disabled={item.isValid ? true : false}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="endDate">
                      <Form.Label>End date</Form.Label>
                      <Form.Control
                        onChange={(e) => handleOnChange(e, item.id)}
                        value={item.endDate}
                        type="date"
                        required
                        disabled={item.isValid ? true : false}
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button
                  form={'workform-' + item.id}
                  type="submit"
                  variant="outline-success"
                >
                  Save
                </Button>
                <Button
                  className="mx-2"
                  onClick={(e) => handleEdit(e, item.id)}
                  variant="outline-warning"
                >
                  Edit
                </Button>
                <Button
                  onClick={(e) => handleDelete(e, item.id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      <Button onClick={handleClick} variant="primary">
        Add Work Experience
      </Button>
    </section>
  );
}
