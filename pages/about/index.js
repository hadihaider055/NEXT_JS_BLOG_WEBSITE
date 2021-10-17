import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>tiedup Blogs | About</title>
        <meta name="description" content="tiedup Blogs | About" />
      </Head>
      <div className="container w-full mx-auto mt-28">
        <div className="mx-5">
          <h1 className="text-center text-3xl mt-10 font-sans font-semibold tracking-wider">
            About
          </h1>
          <p className="mt-5 text-justify text-md text-sm md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            eligendi minima quaerat adipisci consectetur numquam illo commodi
            atque omnis reprehenderit. Saepe ab minima reprehenderit, ipsa
            adipisci nam doloremque velit ipsam? Quaerat aliquam delectus quos
            libero laudantium tempora sint ratione quisquam perferendis
            praesentium unde ab neque ipsa laboriosam voluptatum, aperiam
            doloremque voluptates iste labore debitis? Eveniet magnam libero
            unde sint. Necessitatibus. Accusantium placeat asperiores iure,
            impedit quidem veniam. Perferendis tempora, eius ratione asperiores,
            accusantium sint saepe consectetur accusamus aspernatur unde,
            dignissimos expedita cumque. Laudantium ea iusto optio sunt
            distinctio maiores quaerat. Id, debitis. Hic fugit ipsa nam facere
            suscipit corrupti voluptas dolor ducimus? Officiis vitae inventore
            rerum dicta excepturi assumenda veniam, nemo, sint quod dolore error
            libero facere voluptate ea corrupti. Perspiciatis voluptatum
            doloremque sint in quae sunt consequatur, ea, vero accusamus totam
            minima commodi cupiditate nobis illo. Exercitationem nostrum illum
            inventore vitae quia ipsam corrupti. Fuga repellat quidem unde
            nobis!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer position="absolute" bottom="bottom-0" />
    </>
  );
};
