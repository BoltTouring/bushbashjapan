"use client"; // Ensure this is at the top

export function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form.");
    }
  }

  return (
    <section style={{ textAlign: 'center' }}>
      <h2>Reserve Your Spot / Contact Us</h2>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name/Nym:</label>
          <input type="text" name="name" required style={{
            padding: '10px',
            width: '100%',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }} />
        </p>
        <p>
          <label>Email:</label>
          <input type="email" name="email" required style={{
            padding: '10px',
            width: '100%',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }} />
        </p>
        <p>
          <label>Message:</label>
          <textarea name="message" required style={{
            padding: '10px',
            width: '100%',
            height: '100px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }}></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

