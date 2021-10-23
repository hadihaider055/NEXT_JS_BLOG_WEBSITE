import { createClient } from "contentful";
import CardComponent from "../../components/Card";
import Head from "next/head";

const Blogs = ({ tiedupBlog }) => {
  return (
    <>
      <Head>
        <title>Tiedup Blogs | Blogs</title>
        <meta name="description" content="Tiedup Blogs" />
      </Head>
      <div className="container w-full mx-auto mt-28">
        <h1 className="text-center text-3xl mt-10 font-sans font-semibold tracking-wider">
          Blogs
        </h1>
        <div className="flex flex-wrap items-center w-full">
          {tiedupBlog.map((blog) => {
            return <CardComponent key={blog.sys.id} blog={blog} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "tiedupBlog" });

  return {
    props: {
      tiedupBlog: res.items,
    },
    revalidate: 1,
  };
}
