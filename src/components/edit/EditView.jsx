import { Container } from 'react-bootstrap';

export default function EditView({ children }) {
  return (
    <Container className="d-flex flex-column gap-4 my-4">{children}</Container>
  );
}
