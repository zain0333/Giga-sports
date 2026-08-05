function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>

      <div className="card shadow p-4 mt-3">
        <input className="form-control mb-3" placeholder="Your Name" />

        <input className="form-control mb-3" placeholder="Your Email" />

        <textarea className="form-control mb-3" placeholder="Your Message" />

        <button className="btn btn-primary">Send Message</button>
      </div>

      <div className="mt-4">
        <h4>Contact Information</h4>

        <p>📱 WhatsApp: 03XX-XXXXXXX</p>

        <p>📧 Email: support@gigasports.com</p>
      </div>
    </div>
  );
}

export default Contact;
