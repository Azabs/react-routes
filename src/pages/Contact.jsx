const Contact = () => {
  return (
    <>
      <div>
        <form method="post">
          <div>
            <input
              className="con_input1"
              name="name"
              required="required"
              type="text"
              placeholder="Name"
            />
            <input
              className="con_input1"
              name="mail"
              required="required"
              type="text"
              placeholder="E-Mail"
            />
          </div>

          <div>
            <input
              className="con_input2"
              name="phone-number"
              required="required"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="con_input2"
              name="asunto"
              required="required"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="message"
            required="required"
            placeholder="Write your message"
            cols="30"
            rows="10"
          ></textarea>

          <div>
            <button type="submit" name="send">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
