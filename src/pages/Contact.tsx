function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <div className="container content-page">
      <h1>Contact Us</h1>

      <p>Have a question? Contact GIGA SPORTS SHOP.</p>

      <div className="contact-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>

            <textarea
              className="form-control"
              rows={5}
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
