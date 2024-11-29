import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="container">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
