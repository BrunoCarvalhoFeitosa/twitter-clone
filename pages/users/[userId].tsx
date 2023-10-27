import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Head from "next/head"
import useUsers from "@/hooks/useUsers"
import useUser from "@/hooks/useUser"
import Sidebar from "@/components/Feed/Sidebar"
import MiddleUserContent from "@/components/Feed/MiddleUserContent"
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

const UserView = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data: users = [] } = useUsers()
  const { data: fetchedUser = [] } = useUser(userId as string)

  if (users.length === 0) {
    return null
  }

  return (
    <div>
      <Head>
        <title>Perfil de {fetchedUser.name}</title>
        <meta name="author" content="Bruno Carvalho Feitosa" />
        <meta name="description" content="Veja publicações de pessoas fique por dentro de tudo o que está acontecendo pelo mundo." />
        <link rel="icon" href="/images/fav.png" sizes="any" />
      </Head>
      <div className="w-full h-[100vh] flex justify-between bg-white">
        <Sidebar />
        <MiddleUserContent />
        <WhoFollow />
      </div>
    </div>
  )
}

export default UserView