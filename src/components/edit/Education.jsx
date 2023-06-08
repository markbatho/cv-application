import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';

let eduID = 0;

export default function Education({ education, setEducation }) {
  let eduRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (eduRef.current) eduRef.current.scrollIntoView();
  }, [trigger]);

  function handleClick() {
    setEducation([
      ...education,
      {
        id: eduID++,
        schoolName: '',
        titleOfStudy: '',
        startDate: '',
        endDate: '',
      },
    ]);
    setTrigger(!trigger);
  }

  function handleOnChange(e, itemId) {
    const educationArr = education.map((item) => {
      if (item.id === itemId) {
        return { ...item, [e.target.id]: e.target.value };
      }

      return item;
    });

    setEducation(educationArr);
  }

  return (
    <section className="d-flex flex-column gap-2">
      <div className="section-header d-flex justify-content-between">
        <h2>Education</h2>
        <Button onClick={handleClick} variant="primary">
          Add Education
        </Button>
      </div>
      {education &&
        education.map((item) => {
          return (
            <Card ref={eduRef} key={item.id}>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" as={Col} controlId="schoolName">
                    <Form.Label>School Name</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.schoolName}
                      type="text"
                      placeholder="University of Chicago"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="titleOfStudy"
                  >
                    <Form.Label>Title of Study</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.titleOfStudy}
                      type="text"
                      placeholder="BSc Computer Science"
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
