import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Bagimg from '../assets/img/iconmonstr-shopping-bag-4.svg'
import Checkmark from '../assets/img/checkmark.svg'
import CheckoutPage from './CheckoutPage';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => setShow((s) => !s);



  return (
    <>
      <Button variant=" bag-btn" onClick={toggleShow} className="me-2">
        <img src={Bagimg} className="nav-btn-icons"></img>
        <span className='cart-count'>0</span>
        {/* {name} */}
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>YOUR CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='itemcount'>
            Item Count (0)
          </div>
          <div className='canvas-info'>
            Don't Forget To Use Code "DREAM" On Checkout To Recieve $10 Off!
          </div>
          <div>
            <button href="{CheckoutPage}" className='modal-bottom-btn checkout-btn'>CHECKOUT <img src={Checkmark} className="checkmark-icon"></img></button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}
function Bag() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} scroll={true} backdrop={true} placement={placement} name={placement} />
      ))}
    </>
  );
}

// render(<Bag />);

export default Bag;