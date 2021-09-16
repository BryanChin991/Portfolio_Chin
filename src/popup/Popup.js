import React from 'react'
// npm install @material-ui/core
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import SignUp from './SignUp'

const Popup = (props) => {
    const {title, openPopup, setOpenPopUp} = props
    return (
        <div className='signup'>
            <Dialog open={openPopup} maxWidth='md'>
                <DialogTitle>
                    <div style={{fontStyle:'italic', fontFamily:'Lobster', fontWeight:'bold'}}>{title}</div>
                </DialogTitle>

                <DialogContent dividers>
                    <SignUp setOpenPopUp={setOpenPopUp}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Popup
