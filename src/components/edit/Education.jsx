import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

let eduID = 0;

export default function Education({ education, setEducation }) {
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

  function handleDelete(e, itemId) {
    const educationArr = education.slice();
    const index = educationArr.findIndex((elem) => {
      if (elem.id === itemId) return true;
      return false;
    });

    if (index > -1) educationArr.splice(index, 1);

    setEducation(educationArr);
  }

  return (
    <section className="d-flex flex-column gap-3">
      <div className="section-header d-flex justify-content-between">
        <h2>Education</h2>
      </div>
      {education &&
        education.map((item) => {
          return (
            <Card key={item.id}>
              <Card.Header>School</Card.Header>
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
              <Card.Footer className="text-end">
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
        Add Education
      </Button>
    </section>
  );
}
