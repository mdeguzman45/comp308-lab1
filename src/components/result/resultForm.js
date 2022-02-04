import auth from "../../auth/auth";
import React, { useState, useEffect }  from 'react';

const ResultForm = (props) => {
    const [email, setEmail] = useState();

    useEffect(() => {
        const loggedInUser = auth.getToken();
       
      //  setEmail(loggedInUser);
       if (loggedInUser!=="") {
            setEmail(loggedInUser);
        }
    },[]);

    return ( 
        <div className='container'>
            <div className='bg-light mt-4 p-5'>
                <h1>
                    Thank you {email}
                </h1>
                <br />
                <div>
                    We appreciate your comments: {props.studentComment}
                </div>
            </div>
        </div>
    );
}
 
export default ResultForm;