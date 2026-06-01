import { Header, Footer, Card } from '../components'

const items = [
    {title: "1", description: "description"},
    {title: "2", description: "description"},
    {title: "3", description: "description"},
]

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex p-8 grid grid-cols-1 lg:grid-cols-2 max-w-xl mx-auto gap-6">
                {items.map((item, i) => <Card key={i} {...item} />)}
            </main>
            <Footer />
        </div>
    )
}

export default Home