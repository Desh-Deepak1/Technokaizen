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
                    'cyber-black': '#070b14', /* Deep navy-black matching your image */
                    'cyber-white': '#ffffff', /* Pure white text for readability */
                    'cyber-gray': '#94a3b8', /* Readable light gray for secondary text */
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
              /* Exact dark background from your image */
              background-color: #070b14;
              
              /* The subtle, low-opacity grid pattern */
              background-image: 
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
              background-size: 40px 40px;
              background-attachment: fixed; /* Keeps grid static while scrolling */
              
              color: #ffffff;
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 0;
              min-height: 100vh;
              overflow-x: hidden;
            }

            /* FORCE ALL SECTIONS TO BE TRANSPARENT SO THE GRID IS 100% VISIBLE */
            main, section, div#connect, div#what-we-do {
              background-color: transparent !important;
            }

            /* Component cards remain solid with a slight glass blur for readability */
            .bg-\\[\\#0d1321\\], .bg-\\[\\#0a0f18\\], .bg-\\[\\#111827\\] {
              background-color: rgba(13, 19, 33, 0.7) !important;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.05);
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}