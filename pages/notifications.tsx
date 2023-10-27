import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Sidebar from "@/components/Feed/Sidebar"
import MiddleNotificationsContent from "@/components/Feed/MiddleNotificationsContent"
import WhoFollow from "@/components/Feed/WhoFollow"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

const Notifications = () => {
  return (
    <div>
      <Head>
        <title>Notificações</title>
        <meta name="author" content="Bruno Carvalho Feitosa" />
        <meta name="description" content="Veja publicações de pessoas fique por dentro de tudo o que está acontecendo pelo mundo." />
        <link rel="icon" href="/images/fav.png" sizes="any" />
      </Head>
      <div className="w-full h-[100vh] flex justify-between bg-white">
        <Sidebar />
        <MiddleNotificationsContent />
        <WhoFollow />
      </div>
    </div>
  )
}

export default Notifications