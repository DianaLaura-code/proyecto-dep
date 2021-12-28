import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
    children: React.ReactNode
}

export default function Layout ({children}: Props) {
    return (
        <Container>
            <Header/>
                <main>
                {children}
                </main>
            <Footer/>
        </Container>
    )
}
