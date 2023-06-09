import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';

let workID = 0;

export default function Work({ work, setWork }) {
  let workRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (workRef.current) workRef.current.scrollIntoView();
  }, [trigger]);

  function handleClick() {
    setWork([
      ...work,
      {
        id: workID++,
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
      },
    ]);
    setTrigger(!trigger);
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

  return (
    <section className="d-flex flex-column gap-3">
      <div className="section-header d-flex justify-content-between">
        <h2>Work Experience</h2>
        <Button onClick={handleClick} variant="primary">
          Add Work Experience
        </Button>
      </div>
      {work &&
        work.map((item) => {
          return (
            <Card ref={workRef} key={item.id}>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" as={Col} controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.companyName}
                      type="text"
                      placeholder="Meta, Inc"
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
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} controlId="tasks">
                    <Form.Label>Main Tasks</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.tasks}
                      type="text"
                      placeholder="Figma to React conversion on a large project"
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="startDate">
                      <Form.Label>Start date</Form.Label>
                      <Form.Control
                        onChange={(e) => handleOnChange(e, item.id)}
                        value={item.startDate}
                        type="date"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="endDate">
                      <Form.Label>End date</Form.Label>
                      <Form.Control
                        onChange={(e) => handleOnChange(e, item.id)}
                        value={item.endDate}
                        type="date"
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          );
        })}
    </section>
  );
}
