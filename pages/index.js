import Head from "next/head";
import CardComponent from "../components/Card";
import { createClient } from "contentful";

export default function Home({ tiedupBlog }) {
  const getLatestPost = () => {
    return tiedupBlog.map((blog) => {
      const resDate = Date.parse(blog.fields.date);
      const today = Date.now();
      const diff = Math.floor((today - resDate) / 86400000);
      if (diff <= 7) {
        return <CardComponent key={blog.sys.id} blog={blog} />;
      }
    });
  };

  return (
    <>
      <Head>
        <title>Tiedup Blog | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="w-full lg:grid grid-cols-3 mt-20 ">
          <h1 className="text-2xl ml-4 mx-5">Featured Blogs</h1>
          <div className="flex flex-wrap items-center w-full col-start-1 col-end-3 h-3/5">
            {tiedupBlog.map((blog) => {
              return blog.fields.isFeatured ? (
                <CardComponent key={blog.sys.id} blog={blog} />
              ) : null;
            })}
          </div>
          <div className="mt-14 col-span-1 col-start-3 mx-5">
            <h1 className="text-2xl mb-4 mx-5">Latest Blogs</h1>
            <div className="flex flex-wrap items-center w-full">
              {getLatestPost()}
            </div>
            <div className="mx-5">
              <h1 className="text-2xl mt-8 mb-4">About us</h1>
              <p className="font-sans tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                rem perspiciatis quibusdam porro, alias cumque omnis qui numquam
                dolore laboriosam sequi laudantium voluptatibus magnam quasi.
                Vero non dolorum distinctio perspiciatis! Distinctio similique
                vero quaerat, magnam explicabo nisi. Similique beatae tempora
                voluptatum quidem! Non ab voluptates odit, tenetur temporibus
                illo? Aut, labore aliquam? Reiciendis, dolorum dolore quisquam
                laborum nam et iure. Aliquid odio eligendi voluptatem dolor
                velit repellendus, ullam dolorum enim vel sit deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: "tiedupBlog" });

  return {
    props: {
      tiedupBlog: response.items,
    },
    revalidate: 1,
  };
}
