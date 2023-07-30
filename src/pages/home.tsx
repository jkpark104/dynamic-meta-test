import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Home page의 description 입니다"
        />
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
