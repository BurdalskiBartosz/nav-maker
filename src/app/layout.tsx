import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="container max-w-[1200px]">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
};

export default RootLayout;
