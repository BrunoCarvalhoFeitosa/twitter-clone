import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { Montserrat } from "next/font/google"
import { EditModalProfileProvider } from "@/contexts/EditModalProfileContext"
import { FormProvider } from "@/contexts/FormContext"
import { Toaster } from "react-hot-toast"
import EditProfileModal from "@/components/EditProfileModal"
import "@/styles/globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <EditModalProfileProvider>
        <EditProfileModal />
        <Toaster />
        <FormProvider>
          <div className={montserrat.className}>
            <Component {...pageProps} />
          </div>
        </FormProvider>
      </EditModalProfileProvider>
    </SessionProvider>
  )
}
