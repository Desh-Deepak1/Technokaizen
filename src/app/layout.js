export const metadata = {
  title: "Technokaizen | Enterprise Infrastructure",
  description: "High-performance infrastructure layer for AI models and modern web enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth m-0 p-0">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'cyber-black': '#1e293b', // Lighter slate-blue background
                    'cyber-white': '#ffffff', // Pure white text
                    'cyber-gray': '#f8fafc', // Bright gray for secondary text
                    'cyber-cyan': '#00FFCC',
                    'cyber-purple': '#D946EF',
                  }
                }
              }
            }
          `
        }} />
        
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #1e293b;
              color: #ffffff;
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 0;
              min-height: 100vh;
              overflow-x: hidden;
            }

            .perspective-1000 { perspective: 1000px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-y-180 { transform: rotateY(180deg); }

            /* Fully Restored Global Grid */
            .cyber-grid-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 0;
              pointer-events: none;
              background-size: 50px 50px;
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            }

            /* Ensure content sits above the grid */
            .content-wrapper {
              position: relative;
              z-index: 10;
              width: 100%;
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <div className="cyber-grid-backdrop" />
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}