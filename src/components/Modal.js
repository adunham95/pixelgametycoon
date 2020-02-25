import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, close, modalClass}) => (

    ReactDOM.createPortal(
        <div className={`modal ${modalClass}`}>
            <div className={`modal-container`}>
                {children}
                <button className={"modal-close"} onClick={() => close() }>
                    Close
                </button>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
);

const ToggleContent = ({ toggle, isOpen , content, modalClass }) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => {setIsShown(false);console.log(`Is Closed`)};
    // const show = () => {setIsShown(true);console.log(`Is Open`)};
    useEffect(() => {
        console.log(isOpen);
        setIsShown(isOpen)
    },[isOpen]);
    return (
        <>
            {/* {toggle(show, hide, isShown)} */}
            {isShown && content(hide, modalClass)}
        </>
    );

};

export default ToggleContent;
export {Modal}