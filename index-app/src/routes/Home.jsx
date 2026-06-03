import { Header, Footer, Card } from '../components'
import { items } from '../lib/Content'

const Home = () => {
    return (
    <div className="min-h-screen flex flex-col">
        <Header showStaffButton />
        <main className="flex-1 p-8 flex flex-col max-w-lg mx-auto w-full gap-4">
                {items.map((item, i) => <Card key={i} {...item} />)}
        </main>
        <Footer />
    </div>
    )
}

export default Home
