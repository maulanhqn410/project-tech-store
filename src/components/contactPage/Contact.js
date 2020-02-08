import React from 'react';
import Title from "../Title"
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
    <Title title="contact us" />
          <form className="mt-5">
            {/* first name */}
            <div className="form-group">
              <input type="text" className="form-control"
              placeholder="first name"
              name="johm smith"
              />
            </div>
            {/* email  */}
            <div className="form-group">
              <input type="email" className="form-control"
              placeholder="email@email.com"
              name="email"
              />
            </div>
            {/* subject  */}
            <div className="form-group">
              <input type="type" className="form-control"
              placeholder="important!!!"
              name="subject"
              />
            </div>
            {/* message  */}
            <div className="form-group">
              <textarea className="form-control"
              placeholder="hello there buddy"
              rows="10"
              name="message"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
