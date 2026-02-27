interface AboutProps {
  summary: string;
}

function About({ summary }: AboutProps) {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>{summary}</p>
      </div>
    </section>
  );
}

export default About;