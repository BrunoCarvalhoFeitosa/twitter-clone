import Head from "next/head"
import WelcomeSection from "@/components/Home/WelcomeSection"
import FormSection from "@/components/Home/FormSection"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Twitter, descubra o que está em alta</title>
        <meta name="author" content="Bruno Carvalho Feitosa" />
        <meta name="description" content="Veja publicações de pessoas fique por dentro de tudo o que está acontecendo pelo mundo." />
        <link rel="icon" href="/images/fav.png" sizes="any" />
      </Head>
      <main className="flex flex-col lg:flex-row">
        <WelcomeSection />
        <FormSection />
      </main>
    </div>
  )
}

export default Home