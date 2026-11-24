
export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      color: "#172033",
      minHeight: "100vh"
    }}>
      <header style={{
        padding: "24px 8%",
        background: "#fff"
      }}>
        <h2 style={{color: "#f47721"}}>
          PrimeFix Home Services
        </h2>
      </header>

      <section style={{
        background: "#14243d",
        color: "white",
        padding: "100px 8%"
      }}>
        <h1 style={{fontSize: "48px"}}>
          Your Home Deserves The Best Care
        </h1>
        <p>
          Professional Home Repair and Maintenance Services.
        </p>
        <a href="tel:+10000000000"
          style={{
            display: "inline-block",
            padding: "15px 25px",
            background: "#f47721",
            color: "white",
            textDecoration: "none"
          }}>
          Contact Us
        </a>
      </section>

      <section style={{padding: "50px 8%"}}>
        <h2>Our Services</h2>
        <p>Home Cleaning | Plumbing | Electrical | Maintenance</p>
      </section>
    </div>
  );
}
