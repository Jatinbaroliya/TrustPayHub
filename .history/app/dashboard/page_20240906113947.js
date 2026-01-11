import 

const Dashboard = () => {

    const { data: session } = useSession()

    if (!session) {
         const router = useRouter()
         router.push('/login')
    }

  return (
    <div>
      </dashboard>
    </div>
  )
}

export default Dashboard
