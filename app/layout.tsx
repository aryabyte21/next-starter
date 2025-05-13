//did nothing just added the import for global.css in layout and all the styling is applied.
import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
