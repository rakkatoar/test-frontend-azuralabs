import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Quicksand&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument