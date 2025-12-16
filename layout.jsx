export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Ozon Фрoд Гaйд</title>
      </head>
      <body>{children}</body>
    </html>
  );
}