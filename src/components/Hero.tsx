interface HeroProps {
  businessName: string;
}

function Hero({ businessName }: HeroProps) {
  return (
    <section id="hero" className="hero">
      <h1>{businessName}</h1>
      <p>Experience a symphony of flavors with a stunning view.</p>
      <a href="#menu" className="btn">View Our Menu</a>
    </section>
  );
}

export default Hero;