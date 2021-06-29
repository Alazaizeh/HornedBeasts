// import React from "react";
// import { useState } from "react";
// import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";

// function SelectedBeast(props) {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{props.beast.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img
//             src={props.beast.image_url}
//             title={props.beast.title}
//             alt={props.beast.keyword}
//             style={{ width: "18rem", height: "18rem" }}
//           />
//           <p>{props.beast.description}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default SelectedBeast;

import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class SelectedBeast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
    };
  }

  off = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.beast.image_url}
              title={this.props.beast.title}
              alt={this.props.beast.keyword}
              style={{ width: "18rem", height: "18rem" }}
            />
            <p>{this.props.beast.description}</p>
          </Modal.Body>{" "}
          <Modal.Footer>
            <Button onClick={this.off} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
