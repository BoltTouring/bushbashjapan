export function Schedule({ heading, items }) {
  return (
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      <ul style={{ padding: '0', margin: '0', listStyle: 'none' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{
            backgroundColor: '#fff',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '8px',
            borderLeft: '5px solid #ff9800',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.1rem',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
          }}>
            <strong>{item.time}</strong>
            <span>{item.activity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

