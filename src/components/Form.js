import { useState } from "react";

import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {
    // const display = props.display;
    const insertQuote = props.insertQuote;

    const [centredModal, setCentredModal] = useState(false);
    
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');
    
    const handleToggleShow = () => setCentredModal(!centredModal);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the quote is empty
        if (quote === '') {
          alert('Please fill the quote');
        } else {
          // Insert data
          insertQuote(name, quote);
  
          // Clear name and quote
          setName('');
          setQuote('');

          // Close the modal
          handleToggleShow();
        }
    }

    return (
      <>
        <div className="d-flex justify-content-end my-3">
          <MDBBtn color='primary' className='m-1' style={{borderRadius: '20px'}} onClick={handleToggleShow} >
            <FontAwesomeIcon icon={faPlus} />
          </MDBBtn>
        </div>

        <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e: any) => setCentredModal(e)}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add quote</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleSubmit} className="col-12 mx-auto">
                  <div className="form-group mb-4">
                    <input
                        type="text"
                        className="form-control col-12"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        placeholder="Author name" />
                    <input
                      type="text"
                      className="form-control"
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      required
                      placeholder="Quote" />
                  </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={handleToggleShow}>Close</MDBBtn>
                <MDBBtn color='primary' onClick={handleSubmit}>Save</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default Form;