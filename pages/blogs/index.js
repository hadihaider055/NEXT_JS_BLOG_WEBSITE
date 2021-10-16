import React from "react";
import { createClient } from "contentful";
import CardComponent from "../../components/Card";

const Blogs = ({ tiedupBlog }) => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="text-center text-3xl mt-10 font-sans font-semibold tracking-wider">
        Blogs
      </h1>
      <div className="flex flex-wrap items-center w-full">
        {tiedupBlog.map((blog) => {
          return <CardComponent key={blog.sys.id} blog={blog} />;
        })}
      </div>
    </div>
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
