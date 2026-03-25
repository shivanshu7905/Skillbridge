import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "SkillBridge",
  description: "AI-Powered Career Development Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}