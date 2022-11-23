import React from 'react';

interface ToastProps {
    type?: 'info' | 'error' | 'success';
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
    onClose, message
}) => {
    return(
    <div className="toast toast-top toast-center p-4 w-full">
        <div className="alert alert-success">
                <div className='flex justify-between w-full'>
                    <span>{message}</span>
                    <button onClick={onClose} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
        </div>
    </div>
    )
}

export default Toast;