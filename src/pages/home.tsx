import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Others" />
        <meta property="og:description" content="Others" />
        <meta
          property="og:image"
          content="https://www.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e-1520x800.webp"
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
