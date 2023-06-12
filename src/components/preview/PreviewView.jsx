/* eslint-disable no-unused-vars */
import { Button, Card, Container } from 'react-bootstrap';

export default function PreviewView({ generalInfo, education, work }) {
  return (
    <section className="my-4">
      <Container>
        <Card id="print">
          <Card.Body className="d-flex flex-column gap-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="mb-0">
                {generalInfo.firstName + ' ' + generalInfo.lastName}
              </h1>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex gap-3">
                  <i className="bi bi-envelope-fill"></i>
                  <span>{generalInfo.email}</span>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-phone-fill"></i>
                  <span>{generalInfo.phone}</span>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>{generalInfo.address}</span>
                </div>
              </div>
            </div>
            <Card.Text className="mt-3">{generalInfo.about}</Card.Text>
            <div>
              <h2>Education</h2>
              <ul className="d-flex flex-column gap-4">
                {education &&
                  education.map((item) => {
                    return (
                      <li key={item.id}>
                        <h5 className="mb-0">{item.schoolName}</h5>
                        <h6 className="text-secondary-emphasis mb-0">
                          {item.titleOfStudy}
                        </h6>
                        <div className="d-flex gap-2 text-secondary">
                          <span>{item.startDate}</span>
                          <span>{item.endDate}</span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div>
              <h2>Practical Experience</h2>
              <ul className="d-flex flex-column gap-4">
                {work &&
                  work.map((item) => {
                    return (
                      <li key={item.id}>
                        <h5 className="mb-0">{item.companyName}</h5>
                        <h6 className="text-secondary-emphasis mb-0">
                          {item.positionTitle}
                        </h6>
                        <p className="mb-0">{item.tasks}</p>
                        <div className="d-flex gap-2 text-secondary">
                          <span>{item.startDate}</span>
                          <span>{item.endDate}</span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button onClick={print}>Print</Button>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
}
