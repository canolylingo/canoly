import "./globals.css";

export const metadata = {
  title: "canoly",
  description: "Math Lesson Flow in 10 seconds (Grades 3–5)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
