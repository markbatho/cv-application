import { Container } from 'react-bootstrap';
import GeneralInformation from './GeneralInformation';

export default function EditView() {
  return (
    <Container className="d-flex flex-column gap-4 my-4">
      <GeneralInformation />
    </Container>
  );
}
