import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleinputRef = useRef();
  const imagenputRef = useRef();
  const addressinputRef = useRef();
  const descriptioninputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleinputRef.current.value;
    const enteredImage = imagenputRef.current.value;
    const enteredAddress = addressinputRef.current.value;
    const enteredDescription = descriptioninputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imagenputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Address</label>
          <input type="text" required id="adress" ref={addressinputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptioninputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
