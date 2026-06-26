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
                    'cyber-black': '#0b1121', /* Lighter dark base */
                    'cyber-white': '#FFFFFF', 
                    'cyber-gray': '#E2E8F0', /* High contrast gray */
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
              background-color: #0b1121;
              color: #FFFFFF;
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

            /* 100% VISIBLE GLOBAL GRID */
            .cyber-grid-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 0;
              pointer-events: none;
              background-color: #0b1121;
              background-size: 40px 40px;
              /* Premium Cyan-White mixed grid lines */
              background-image: 
                linear-gradient(to right, rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 255, 204, 0.1) 1px, transparent 1px);
            }

            /* FORCE SECTIONS TO BE TRANSPARENT TO REVEAL GRID */
            main, section, div#connect, div#what-we-do {
              background-color: transparent !important;
            }

            /* KEEP COMPONENT CARDS SOLID WITH GLASS BLUR FOR READABILITY */
            .bg-\\[\\#0d1321\\], .bg-\\[\\#0a0f18\\], .bg-\\[\\#111827\\] {
              background-color: rgba(13, 19, 33, 0.85) !important;
              backdrop-filter: blur(10px);
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