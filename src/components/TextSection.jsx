export function TextSection({ heading, content }) {
  return (
    <section style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2>{heading}</h2>
      <p 
        style={{ fontSize: '1.2rem', lineHeight: '1.6' }} 
        dangerouslySetInnerHTML={{ __html: content.replace(
          /<a /g, "<a style='color: blue; text-decoration: underline;' target='_blank' "
        ) }} 
      />
    </section>
  );
}

