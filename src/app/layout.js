export const metadata = {
  title: "Technokaizen | Enterprise Infrastructure",
  description: "High-performance infrastructure layer for AI models and modern web enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth m-0 p-0 bg-[#0b1121]">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'cyber-black': '#0b1121', // Lighter dark theme for better contrast
                    'cyber-white': '#FFFFFF', 
                    'cyber-gray': '#E2E8F0', // Brighter text for readability
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
              background-color: #0b1121; /* Lighter background */
              color: #E2E8F0; /* High visibility default text */
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

            /* RESTORED GLOBAL GRID */
            .cyber-grid-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1;
              pointer-events: none;
              opacity: 0.35; /* Increased opacity so grid is visible */
              background-size: 40px 40px;
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <div className="cyber-grid-backdrop" />
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}