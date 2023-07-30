import { Helmet } from "react-helmet-async";

function Others() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Others" />
        <meta
          property="og:description"
          content="Others page의 description 입니다"
        />
      </Helmet>
      <h1>Others</h1>
    </>
  );
}

export default Others;
