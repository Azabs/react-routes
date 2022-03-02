const Contact = () => {
  return (
    <>
      <div className="text-center my-sm-4 row">
        <div className="col-md-6 bg-primary text-light p-3">
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quid
            possumus facere melius? Quod non faceret, si in voluptate summum
            bonum poneret. Sic enim censent, oportunitatis esse beate vivere.
            Duo Reges: constructio interrete. Illis videtur, qui illud non
            dubitant bonum dicere -; Paria sunt igitur. Quis negat? Nam et a te
            perfici istam disputationem volo, nec tua mihi oratio longa videri
            potest. Nescio quo modo praetervolavit oratio. Solum praeterea
            formosum, solum liberum, solum civem, stultost;{" "}
          </p>
        </div>
        <form method="post" id="contact-form" className="col-md-6 my-4">
          <div>
            <input
              name="name"
              required="required"
              type="text"
              placeholder="Name"
            />
            <input
              name="mail"
              required="required"
              type="text"
              placeholder="E-Mail"
            />
          </div>

          <div>
            <input
              name="phone-number"
              required="required"
              type="text"
              placeholder="Phone Number"
            />
            <input
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
