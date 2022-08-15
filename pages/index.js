import Head from 'next/head'
import { useEffect } from 'react'
import { ButtonLink } from '../components/button'
import PortfolioItem from '../components/portfolioItem'
import AppBar from '../components/appBar'
import SocialMediaLinks from '../components/socialMediaLink'
import Aos from 'aos'
import 'aos/dist/aos.css'
import bg from '../public/assets/images/background_1280.jpg'


export default function Home() {

  useEffect(() => {
    Aos.init({
      duration : 800
    })
}, []);

  return (
    <div>
      <Head>
        <title>HenriqueFelix.dev</title>
        <meta name="description" content="Site de portifólio com os trabalhos de Henrique Felix" />
        <meta name="author" content="Henrique Felix" />
      </Head>
      <main>
        <div className="h-100vh flex flex-col">
          <AppBar />
          <div 
            id="home-section"
            className="flex-1 flex justify-center md:justify-start items-center p-16 bg-no-repeat bg-cover bg-center"
            style={{backgroundImage: `linear-gradient(180deg,rgba(63,69,210,.9),rgba(63,69,210,.9)), url(${bg.src})`}}
            >
            <div className="text-white text-center md:text-start w-80 lg:w-2/5">
              <div className="mb-4">
                <p className="text-4xl leading-snug uppercase" data-aos="fade-right">
                  Adquira seu site ou aplicativo e dê um {' '}
                  <strong className="text-secondary">upgrade</strong> {' '}
                  no seu negócio
                </p>
              </div>
              <ButtonLink 
                className="px-16 py-5"
                href="https://api.whatsapp.com/send?phone=+5531983489321"
                target="_new"
                data-aos="zoom-in"
                >
                  Fazer Orçamento
                </ButtonLink>
            </div>
          </div>
        </div>
        <div id="about-section" className="flex items-center justify-center h-90vh bg-gray-100">
          <div className="flex flex-col justify-center text-center px-24 w-full xl:w-5/6 xl:m-auto">
            <div className="mb-8">
              <h2 data-aos="fade-down" 
                className="text-4xl font-medium"
                >
                  Como Trabalhamos
                </h2>
              <p data-aos="fade-right">
                Sejam com sites responsivos ou aplicativos android e IOS,
                utilizamos as melhores ferramentas e tecnologias do mercado
                para o desenvolvimento de nossos serviços.
              </p>
            </div>
            <section className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:gap-16">
              <div className="flex-1" data-aos="zoom-in">
                <img 
                  className="h-32 m-auto"
                  src="assets/images/jobs/devices.svg" 
                  alt="Dispositivos eletrônicos" 
                  title="Dispositivos eletrônicos" />
                <h3 className="font-bold text-lg">Websites Responsivos</h3>
                <p>
                  Tenha websites que se adaptam a diferentes tamanhos de tela em diferentes dispositivos
                </p>
              </div>
              <div className="flex-1" data-aos="zoom-in">
                <img 
                  className="h-32 m-auto"
                  src="assets/images/jobs/mobile.svg"
                  alt="Telefone celular"
                  title="Telefone celular" />
                <h3 className="font-bold text-lg">Aplicativos Android e IOS</h3>
                <p>
                  Adquira aplicativos para android e IOS para conectar o seu cliente ao seu negócio
                </p>
              </div>
              <div className="flex-1" data-aos="zoom-in">
                <img 
                  className="h-32 m-auto"
                  src="assets/images/jobs/flutter.svg"
                  alt="Linguagem de programação Flutter"
                  title="Linguagem de programação Flutter" />
                <h3 className="font-bold text-lg">Ferramentas mais modernas do mercado</h3>
                <p>
                  Websites e aplicativos desenvolvidos com as ferramentas mais modernas e utilizadas do mercado (NodeJS, VueJS, Flutter)
                </p>
              </div>
            </section>
          </div>
        </div>
        <div id="portfolio-section" className="h-90vh">
          <div className="flex flex-col justify-center px-24 py-16 lg:w-5/6 lg:m-auto">
            <div className="text-center mb-8">
              <h2 
                data-aos="fade-down"
                className="text-4xl font-medium"
                >
                  Trabalhos
                </h2>
              <p data-aos="fade-right">Confira alguns de nossos trabalhos já realizados</p>
            </div>
            <section className="flex flex-col flex-wrap items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 lg:items-stretch">
              <PortfolioItem
                type="Website"
                title="Marcos Filipe - Foto e Vídeo"
                image="assets/images/portfolio/mf_foto_video_1280.jpg"
                url="http://www.marcosfilipe.site/" />

              <PortfolioItem
                type="Aplicativo"
                title="FazenTech"
                image="assets/images/portfolio/fazentech_1280.jpg"
                url="https://github.com/HenriqueFelixDev/fazentech" />
            </section>
          </div>
        </div>
        <div 
          id="contact-section" 
          className="bg-primary text-white text-center px-24 py-32">
          <section>
            <h2 
              data-aos="fade-down"
              className="font-bold text-4xl"
              >
                Faça o seu orçamento
              </h2>
            <p data-aos="fade-right">
              E aí, gostou de algum projeto? Entre em contato e faça o seu orçamento agora mesmo.
            </p>
            <ButtonLink
              data-aos="zoom-in"
              className="m-4"
              href="https://api.whatsapp.com/send?phone=+5531983489321"
              target="_new"
              >
              Fazer orçamento
            </ButtonLink>
          </section>
        </div>
      </main>
      <footer className="flex flex-col items-center space-y-4 py-8">
        <a href="#">
          <img src="assets/images/logo/logo.png" className="h-12" alt="HenriqueFelix.dev Logo" />
        </a>
        <nav>
          <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center text-primary uppercase">
            <li>
              <a href="#home-section">Início</a>
            </li>
            <li>
              <a href="#about-section">Como Trabalhamos</a>
            </li>
            <li>
              <a href="#portfolio-section">Trabalhos</a>
            </li>
            <li>
              <a href="#contact-section">Contato</a>
            </li>
          </ul>
        </nav>
        <span>
          Telefone: &nbsp;
          <a href="tel:+5531983489321"
            className="text-secondary"
            >
            +55 (31) 9 8348-9321
          </a>
        </span>
        <span className="hidden">|</span>
        <SocialMediaLinks className="text-primary" />
      </footer>
    </div>
  )
}
