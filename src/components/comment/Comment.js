import React, { useState, useEffect }  from 'react';
import { useHistory } from "react-router-dom";
import auth from "../../auth/auth";

const Comment = (props) => {
    const [courseCode, setCourseCode] = useState();
    const [courseName, setCourseName] = useState();
    const [favoriteLab, setFavoriteLab] = useState('Lab1');
    const [likedCourse, setLikedCourse] = useState();
    const [email, setEmail] = useState();
    const [comment, setComment] = useState();
    const history = useHistory();

    useEffect(() => {
        const loggedInUser = auth.getToken();
       
      //  setEmail(loggedInUser);
       if (loggedInUser!=="") {
            setEmail(loggedInUser);
        }
    },[]);

    const handleSubmit = e => {
        e.preventDefault();
        props.onCommentUpdate(comment);
        history.push('/result');
      };

    return ( 
        <div className='container'>
            <div className='bg-light mt-4 p-5'>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
						<label>Course Code</label>
						<input type="text" className="form-control" onChange={e => setCourseCode(e.target.value)} />
					</div>
                    <div className="col-md-6">
						<label>Course Name</label>
						<input type="text" className="form-control" onChange={e => setCourseName(e.target.value)} />
					</div>

                    <div className="col-md-6">
						<label>Student Email</label>
						<input type="text" className="form-control" defaultValue={email} disabled = {true} />
					</div>
                    <div className="col-md-6">
                    <label>Favorite Laboratory</label>
                        <select className="form-control" onChange={e => setFavoriteLab(e.target.value)}>
                            <option value="Lab1">Laboratory 1</option>
                            <option value="Lab2">Laboratory 2</option>
                            <option value="Lab3">Laboratory 3</option>
                            <option value="Lab4">Laboratory 4</option>
                        </select>
                    </div>

                    <div className="col-md-6">
					</div>
                    <div className="col-md-6">
                        <label>Did you like the course?</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" value="Yes" onChange={e => setLikedCourse(e.target.value)} />
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="No" onChange={e => setLikedCourse(e.target.value)} />
                                <label className="form-check-label">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
						<label>Your Comments</label>
						<textarea className="form-control" placeholder="Leave a comment here" style={{
                            height: '100px'
                        }} onChange={e => setComment(e.target.value)} rows={5}></textarea>
					</div>

                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                    <button className="btn btn-primary float-end">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Comment;


/*


                        <div onChange={e => setLikedCourse(e.target.value)}>
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            <input type="radio" value="Other" name="gender" /> Other
                        </div>

                        */