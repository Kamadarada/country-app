export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-indigo-700 text-gray-100 py-4 shadow-md">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold text-center">Country Info App</h1>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-indigo-900 text-gray-400 py-4">
            <div className="container mx-auto text-center">
              <p className="text-sm">Built with ❤️ using Next.js and Tailwind CSS</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
