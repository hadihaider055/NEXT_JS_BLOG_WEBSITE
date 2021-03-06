import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Blog({ tiedupBlog }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {node.content[0].value}
          </a>
        );
      },
    },
  };

  const router = useRouter();
  const [showButton, setShowButton] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.authReducer.auth) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [state]);

  const handleReadmore = () => {
    dispatch({ type: "AUTH_USER_PATH", payload: router.query.slug });
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>{"Tiedup Blogs | " + tiedupBlog.fields.title}</title>
        <meta name="description" content={tiedupBlog.fields.title} />
      </Head>
      <div className="container mx-auto w-full  mb-28">
        <div>
          <h1 className="font-lato font-bold mt-24 text-2xl text-center">
            {tiedupBlog.fields.title}
          </h1>
          <div className="mx-auto text-center mt-10">
            <Image
              src={"https:" + tiedupBlog.fields.mainImage.fields.file.url}
              alt={tiedupBlog.fields.mainImage.fields.title}
              placeholder="blur"
              blurDataURL={
                "https:" + tiedupBlog.fields.mainImage.fields.file.url
              }
              width={1000}
              height={450}
            />
            <div
              className={`text-justify mt-10 mx-5 font-sans tracking-wider text-md leading-relaxed ${
                showButton ? "hideBlog" : ""
              }`}
            >
              {documentToReactComponents(tiedupBlog.fields.blog, options)}
            </div>
            {showButton && (
              <button
                className="mt-10 border-2 p-2 border-indigo-500 hover:bg-indigo-500 hover:text-white rounded-lg outline-none focus:outline-none"
                onClick={handleReadmore}
              >
                Read More
              </button>
            )}
            <div className="flex items-center justify-between mx-5 mt-20">
              <p className="text-gray-600 font-light text-sm uppercase font-lato">
                {tiedupBlog.fields.author}
              </p>
              <p className="text-gray-600 font-light text-sm font-lato">
                {tiedupBlog.fields.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "tiedupBlog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "tiedupBlog",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { tiedupBlog: items[0] },
    revalidate: 1,
  };
};
