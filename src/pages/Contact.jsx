const Contact = () => {
  return (
    <>
      <div className="text-center my-sm-4 row">
        <div className="d-flex align-items-center col-md-6 bg-purple text-light my-3 my-md-2 p-3 p-sm-5">
          <div>
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quid
              possumus facere melius? Quod non faceret, si in voluptate summum
              bonum poneret. Sic enim censent, oportunitatis esse beate vivere.
              Duo Reges: constructio interrete. Illis videtur, qui illud non
              dubitant bonum dicere -; Paria sunt igitur. Quis negat? Nam et a
              te perfici istam disputationem volo, nec tua mihi oratio longa
              videri potest. Nescio quo modo praetervolavit oratio. Solum
              praeterea formosum, solum liberum, solum civem, stultost;{" "}
            </p>
          </div>
        </div>
        <form
          method="post"
          className="form bg-purple col-md-6 mt-1 mb-3 px-3 py-3 my-md-auto"
        >
          <input
            name="name"
            required="required"
            type="text"
            placeholder="Name"
          />
          <input
            name="phone-number"
            required="required"
            type="text"
            placeholder="Phone Number"
          />

          <div className="d-flex">
            <input
              name="mail"
              required="required"
              type="text"
              placeholder="E-Mail"
            />
            <input
              className="mr-0"
              name="subject"
              required="required"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="message"
            required="required"
            placeholder="Write your message"
            cols="44"
            rows="5"
          ></textarea>

          <button className="btn my-1" type="submit" name="send">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
