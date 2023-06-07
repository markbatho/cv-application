import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EditView from './components/edit/EditView';
import PreviewView from './components/preview/PreviewView';

const views = {
  EDIT: 'edit',
  PREVIEW: 'preview',
};

function App() {
  const [view, setView] = useState(views.EDIT);

  return (
    <div className="App">
      <Navbar className="px-2 py-0" bg="white" variant="light" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">CV Application</Navbar.Brand>
          <Nav className="justify-content-end">
            <Button
              variant="primary"
              onClick={() => {
                view === views.EDIT
                  ? setView(views.PREVIEW)
                  : setView(views.EDIT);
              }}
            >
              {view === views.EDIT ? 'Preview' : 'Edit'}
            </Button>
          </Nav>
        </Container>
      </Navbar>
      {view === views.EDIT ? <EditView /> : <PreviewView />}
    </div>
  );
}

export default App;
