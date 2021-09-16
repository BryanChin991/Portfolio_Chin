import React, {useState} from 'react'

const SignUp = ({setOpenPopUp}) => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = (e)=>{
        // note e.preventDefault()
        e.preventDefault()

        if (username){
            console.log(username)
            setOpenPopUp(false)
        }else{
            setMessage('Please sign up')
        }
        
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col'>
                        <p>Username</p>
                    </div>
                    <div className='col'>
                        <input type="text" 
                        placeholder='Username' 
                        name='username'
                        value={username}
                        onChange={e=>setUsername(e.target.value)}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <p>Email</p>
                    </div>
                    <div className='col'>
                        <input type="email" placeholder='Email'/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <p>Password</p>
                    </div>
                    <div className='col'>
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <p>Password</p>
                    </div>
                    <div className='col'>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
                </div>

                <div className="row">
                    <button className='btn btn-success'>Sign Up</button>
                </div>

                <div style={{textAlign:'center', color:'red', marginTop:'1rem'}}>
                    {message && message}
                </div>
          
            </form>
        </div>
    )
}

export default SignUp
