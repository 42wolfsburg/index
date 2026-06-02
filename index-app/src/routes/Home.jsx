import { Header, Footer, Card } from '../components'

// if you need another card, just add it in the list of items following the structure of title, description, and link inside curly brackets.
const items = [
    {title: "42wolfsburg.de", description: "Our main webpage! Here is our public webpage that is accessible to the general public.", link: "https://www.42wolfsburg.de"},
    {title: "Printserver", description: "Our internal service for printing stuff! If you need something printed, just go here and use your 42 account to authenticate! Beware, you need wallet points for printing!", link: "https://printserver.42wolfsburg.de"},
    {title: "Notion", description: "Notion is where all our documentation and important information is! If you don't know about X or Y, check if we page a page in notion for it before even asking your peers!", link: "https://www.notion.so/42wolfsburgberlin/Wolfsburg-5564a9071a0a4b13b5a05f3584ed4c7b"},
    {title: "Intra", description: "Intra is the portal where you can get your subjects, find which peers are on site, and much more.", link: "https://intra.42.fr"},
    {title: "Peersphere", description: "Peersphere is how we manage our evaluation system. If you need something evaluated, or gotta evaluate someone, this is the place to be!", link: "https://peersphere.42wolfsburg.de"},
    {title: "BOOK", description: "BOOK is our booking system for all of our campus meeting rooms! Here you can schedule slots of max three hours in our meeting rooms.", link: "https://meeting.42wolfsburg.de"},
    {title: "Libri", description: "Libri is our system for our library books! You can scan and do everything yourself from there.", link: "https://libri.42wolfsburg.de"}
]

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex p-4 grid grid-cols-1 lg:grid-cols-4 mx-auto gap-6">
                {items.map((item, i) => <Card key={i} {...item} />)}
            </main>
            <Footer />
        </div>
    )
}

export default Home