export function Hero({ image, heading, subheading }) {
  return (
    <section style={{ 
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - 80px)',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <img 
        src={image} 
        alt="Hero Background" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      
      {/* Overlay for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}></div>

      {/* Text Content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '5rem',  // Increased size from 4rem to 5rem
          fontWeight: 'bold',
          textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
          marginBottom: '15px' // Added more space below
        }}>
          {heading}
        </h1>
        <h2 style={{
          fontSize: '1.8rem',  // Adjusted from 2rem to 1.8rem for better balance
          fontWeight: 'normal',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }}>
          {subheading}
        </h2>
      </div>
    </section>
  );
}

