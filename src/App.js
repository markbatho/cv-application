import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EditView from './components/edit/EditView';
import PreviewView from './components/preview/PreviewView';
import GeneralInformation from './components/edit/GeneralInformation';
import Education from './components/edit/Education';
import Work from './components/edit/Work';

const views = {
  EDIT: 'edit',
  PREVIEW: 'preview',
};

function App() {
  const [view, setView] = useState(views.EDIT);
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    about: '',
  });
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);

  return (
    <div className="App">
      <Navbar
        className="px-2 py-0 shadow-sm"
        bg="white"
        variant="light"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">CV Application</Navbar.Brand>
          <Nav className="justify-content-end">
            <Button
              disabled={isPreviewEnabled ? false : true}
              variant={isPreviewEnabled ? 'primary' : 'secondary'}
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
      {view === views.EDIT ? (
        <EditView>
          <GeneralInformation
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <Education education={education} setEducation={setEducation} />
          <Work work={work} setWork={setWork} />
        </EditView>
      ) : (
        <PreviewView />
      )}
    </div>
  );
}

export default App;
