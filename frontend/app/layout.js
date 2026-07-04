import "./globals.css";

export const metadata = {
  title: "Kant Video Ingest",
  description: "Simple video file intake for drone tracking experiments"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
