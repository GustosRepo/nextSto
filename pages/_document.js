import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {this.newMethod()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  newMethod() {
    return <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  }
}

export default MyDocument