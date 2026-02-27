interface ContactProps {
  address: string;
}

function Contact({ address }: ContactProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <p>{address}</p>
            <h3>Call Us</h3>
            <p>+91 22 1234 5678 (Example)</p>
            <h3>Email Us</h3>
            <p>contact@hillviewcafe.com (Example)</p>
          </div>
          <div className="map-container">
            <iframe
              src={mapSrc}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${address}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;