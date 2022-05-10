import { useState } from "react";

const Contact = ({onAdd}) => {
  
    const [contactForm, setContactForm] = useState({ name: "", text: "" });
  
  const sendForm = (e) => {
    e.preventDefault();
    if (!contactForm) {
      alert("Please add a task");
      return;
    }
    onAdd(contactForm)
    setContactForm({ name: "", text: "" })
    
  };

  return (
    <div>
      <h3>you will find the form below, please contact us</h3>
      <form className="add-form" onSubmit={sendForm}>
        <div className="form-control">
          <label htmlFor="">Your name here</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Joe Sakouhi"
            value={contactForm.name}
            onChange={(e) => setContactForm({ ...contactForm, name : e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Your request</label>
          <input
            type="text"
            name="formText"
            id="formText"
            placeholder="Write down the text you want to send in here"
            value={contactForm.text}
            onChange={(e) => setContactForm({ ...contactForm, text : e.target.value })}
          />
        </div>

        <input type="submit" value="Send Request" className="btn btn-block" />
      </form>
    </div>
  );
};

export default Contact;
