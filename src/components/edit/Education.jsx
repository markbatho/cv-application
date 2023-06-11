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
        isValid: false,
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

  function handleSubmit(e, itemId) {
    e.preventDefault();

    const educationArr = education.map((item) => {
      if (item.id === itemId) {
        return { ...item, isValid: true };
      }

      return item;
    });

    setEducation(educationArr);
  }

  function handleEdit(e, itemId) {
    const educationArr = education.map((item) => {
      if (item.id === itemId) {
        return { ...item, isValid: false };
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
                <Form
                  id={'eduform-' + item.id}
                  onSubmit={(e) => handleSubmit(e, item.id)}
                >
                  <Form.Group className="mb-3" as={Col} controlId="schoolName">
                    <Form.Label>School Name</Form.Label>
                    <Form.Control
                      onChange={(e) => handleOnChange(e, item.id)}
                      value={item.schoolName}
                      type="text"
                      placeholder="University of Chicago"
                      required
                      disabled={item.isValid ? true : false}
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
              <Card.Footer className="text-end gap-2">
                <Button
                  form={'eduform-' + item.id}
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
        Add Education
      </Button>
    </section>
  );
}
