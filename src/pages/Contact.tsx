function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Write your message"></textarea>

        <button className="contact-submit">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
