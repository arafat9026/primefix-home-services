
export default function App() {
  return (
    <main className="container">
      <nav>
        <h2>PrimeFix</h2>
        <span>Home Services</span>
      </nav>

      <section className="hero">
        <p className="tag">PROFESSIONAL HOME SERVICES</p>

        <h1>
          Your Home Deserves
          <br />
          The Best Care.
        </h1>

        <p>
          Reliable home maintenance and repair
          services. Quality work you can trust.
        </p>

        <a href="tel:+10000000000" className="btn">
          Contact Us
        </a>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <article>Home Cleaning</article>
          <article>Plumbing</article>
          <article>Electrical Repair</article>
          <article>Home Maintenance</article>
        </div>
      </section>

      <footer>
        © 2026 PrimeFix Home Services
      </footer>
    </main>
  );
}
