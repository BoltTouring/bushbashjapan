export function ContactForm() {
  return (
    <section style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" required></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

