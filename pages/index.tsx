import type { NextPage } from 'next'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import Cards from '../components/Cards'
import Formulario from '../components/Formulario'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Home: NextPage = () => {
  return (
    <div className="font-white">
    <Layout>  
      <main>
        
            <div className='features px-4 py-4'>
              <Row>
                <Col className="text-center pt-4">
                  <h2 className='subtitulo'>FEATURES</h2>
                  <p className='texto text-center pt-2 text-dark px-5 pb-4'>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta), Lorem Ipsum ha sido el texto de relleno estándar, Lorem Ipsum ha sido el texto de relleno estándar</p>
                </Col>
              </Row>
            </div>
      
            <div>
              <Cards/>
            </div>

            <section className="px-4 py-5">
              <Formulario/>
            </section>
      </main>
    </Layout>
    </div>
  )
}

export default Home
