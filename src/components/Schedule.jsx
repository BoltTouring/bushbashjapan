export function Schedule({ heading, items }) {
  return (
    <section style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      {/* Ensure the heading renders HTML correctly */}
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ padding: '10px 0' }}>
            <strong dangerouslySetInnerHTML={{ __html: item.time }} />: <span dangerouslySetInnerHTML={{ __html: item.activity }} />
          </li>
        ))}
      </ul>
    </section>
  );
}

