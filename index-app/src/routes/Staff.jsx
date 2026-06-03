import { Header, Footer, Card } from '../components'
import { useState } from 'react'
import { items_staff } from '../lib/Content'

const Staff = () => {
    
    return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-8 flex flex-col max-w-lg mx-auto w-full gap-4">
            {items_staff.map((item, i) => <Card key={i} {...item} />)}
        </main>
        <Footer />
    </div>
    )
}

export default Staff