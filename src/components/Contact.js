import React from 'react'

const Contact = () => {
    return (
        <React.Fragment>
             <div className="container my-4">
        <h2>Contact Us</h2>

        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Select your Course</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>Web development</option>
                <option>Android development</option>
                <option>Data Science</option>
                <option>Machine learning</option>
                <option>ios development</option>
              </select>
            </div>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary my-1">Submit</button>
        </form>
        </div>
        </React.Fragment>
    )
}

export default Contact
