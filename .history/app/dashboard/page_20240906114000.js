import Dashboard from "@/components/Dashboard"

const Dashboard = () => {

    const { data: session } = useSession()

    if (!session) {
         const router = useRouter()
         router.push('/login')
    }

  return (
    <div>
      </Dashboard>
    </div>
  )
}

export default Dashboard
