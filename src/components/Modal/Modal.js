import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css'
const Backdrop = (props) =>{
    return <div className="fixed top-0 left-0 w-[100%] h-[100vh] z-20 bg-black bg-opacity-75 " onClick={props.onHideForm}/>
};
const ModalOverlay = (props) => {
    return  <div id="modal" className="fixed top-[20vh] left-[25%] w-[50%] bg-white p-4 rounded-[14px] z-30  ">
                <div>{props.children}</div>
            </div> 
}
const Modal = (props) =>{
    const portalElement = document.getElementById('overlays')
    return  <React.Fragment>
                {ReactDOM.createPortal(<Backdrop onHideForm={props.onHideForm}/>,portalElement)}
                {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
                {/* <Cart data={props.data}/>*/}     
            </React.Fragment>
}
export default Modal