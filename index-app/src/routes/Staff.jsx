import { Header, Footer, Card } from '../components'
import { useState } from 'react'

const items = [
    {title: "42wolfsburg.de", description: "Our main webpage! Here is our public webpage that is accessible to the general public.", link: "https://www.42wolfsburg.de"},
    {title: "Printserver", description: "This is our webapp that takes care of our printing services.", link: "https://printserver.42wolfsburg.de"},
    {title: "Notion", description: "Notion is where all our documentation and important information is! If you don't know about X or Y, check if we page a page in notion for it before even asking your peers!", link: "https://app.notion.com/p/42wolfsburgberlin/80e2d6f8e2bd49b280bf8e77e0a5d463?v=eb06d71cf6b54ada999528d9f41dba4a"},
    {title: "Kenjo", description: "Our HR platform where you track your working hours and documents.", link: "https://www.kenjo.io"},
    {title: "Intra", description: "Intra is where all student related processes can be done. This service is used more commonly by pedago and community. You need an intra login to proceed.", link: "https://auth.42.fr/auth/realms/staff-42/protocol/openid-connect/auth?client_id=intra&redirect_uri=https%3A%2F%2Fadmin.intra.42.fr%2Fusers%2Fauth%2Fkeycloak_admin%2Fcallback&response_type=code&state=48eb3eea8e4f931501e57efefbc734fee01a4ae9bdb4eb8d"},
    {title: "BOOK", description: "BOOK is our booking system for all of our campus meeting rooms! Here you can schedule slots of max three hours in our meeting rooms.", link: "https://meeting.42wolfsburg.de"},
    {title: "Libri", description: "Libri is our system for our library books! You can scan and do everything yourself from there.", link: "https://libri.42wolfsburg.de"},
    {title: "API-keychain", description: "Service from Hive that tracks our keychains and subsequent expiry.", link: "https://api-keychain.42wolfsburg.de"},
]

const Staff = () => {
    
    return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-8 grid max-w-screen-xl mx-auto gap-6">
            {items.map((item, i) => <Card key={i} {...item} />)}
        </main>
        <Footer />
    </div>
    )
}

export default Staff