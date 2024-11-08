import { DashboardPage } from "@/components/dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { FC } from "react"
import UpgradePageContent from "./upgrade-page-content"

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return <DashboardPage title="Pro Membership">
    <UpgradePageContent plan = {user.plan}/>
  </DashboardPage>
}

export default page
