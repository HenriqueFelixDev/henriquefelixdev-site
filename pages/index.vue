<template>
  <div>
    <header>
      <div class="bg-primary text-light">
        <div class="text-right container-fluid">
          <span>Telefone: <a href="tel:+5531983489321" class="text-secondary">+55 (31) 9 8348-9321</a></span>
          <ul class="nav d-inline-block">
            <li class="nav-item d-inline-block">
              <a
                href="https://www.linkedin.com/in/henrique-felix-dev/"
                class="nav-link"
                target="_new"
              >
                <i class="fa fa-linkedin text-light"></i>
              </a>
            </li>
            <li class="nav-item d-inline-block">
              <a href="https://www.instagram.com/henriquefelix.dev/" class="nav-link" target="_new">
                <i class="fa fa-instagram text-light"></i>
              </a>
            </li>
            <li class="nav-item d-inline-block">
              <a href="https://github.com/HenriqueFelixDev" class="nav-link" target="_new">
                <i class="fa fa-github text-light"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav class="appbar navbar navbar-expand-lg navbar-dark bg-primary py-3">
        <div class="container-fluid">
          <h1 class="navbar-brand">
            <a href="#">
              <img src="~/assets/images/logo/logo_dark_3.png" alt="HenriqueFelix.dev logo" />
            </a>
          </h1>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#main-menu"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Abrir/Fechar menu principal"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main-menu">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#home-section" class="nav-link">Início</a>
              </li>
              <li class="nav-item">
                <a href="#about-section" class="nav-link">Como Trabalhamos</a>
              </li>
              <li class="nav-item">
                <a href="#portfolio-section" class="nav-link">Trabalhos</a>
              </li>
              <li class="nav-item">
                <a href="#contact-section" class="nav-link">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div id="home-section" class="content-section text-light d-flex align-items-center">
        <section>
          <div class="col-lg-6">
            <p class="main-message" data-aos="fade-right">
              Adquira seu site ou aplicativo e dê um <strong class="text-secondary">upgrade</strong> no seu negócio
            </p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=+5531983489321" target="_new" class="btn btn-secondary rounded-pill p-3 px-5" data-aos="zoom-in">Fazer Orçamento</a>
        </section>
      </div>
      <div id="about-section" class="content-section stripped">
        <div class="text-center">
          <h2 data-aos="fade-down">Como Trabalhamos</h2>
          <p data-aos="fade-right">
            Sejam com sites responsivos ou aplicativos android e IOS,
             utilizamos as melhores ferramentas e tecnologias do mercado
             para o desenvolvimento de nossos serviços.
          </p>
        </div>
        <div class="row mt-5">
          <div class="offset-1 col-lg-3 mb-5 mb-lg-0 d-none d-md-block">
            <div class="image-wrapper" data-aos="fade-right">
              <picture>
                <source srcset="~/assets/images/macbook/macbook_1280.jpg" media="(max-width: 992px)" />
                <source srcset="~/assets/images/macbook/macbook_640.jpg" media="(max-width: 1600px)" />
                <source srcset="~/assets/images/macbook/macbook_1280.jpg" media="(max-width: 2000px)" />
                <img src="~/assets/images/macbook/macbook_640.jpg" title="Macbook" alt="Macbook" />
              </picture>
            </div>
          </div>
          <section class="row col-lg-6">
            <div class="trigger col-lg-6" data-aos="zoom-in">
              <img src="~/assets/images/devices.svg" alt="Dispositivos eletrônicos" title="Dispositivos eletrônicos" />
              <h3>Websites Responsivos</h3>
              <p>
                Tenha websites que se adaptam a diferentes tamanhos de tela em diferentes dispositivos
              </p>
            </div>
            <div class="trigger col-lg-6" data-aos="zoom-in">
              <img src="~/assets/images/mobile.svg" alt="Telefone celular" title="Telefone celular" />
              <h3>Aplicativos Android e IOS</h3>
              <p>
                Adquira aplicativos para android e IOS para conectar o seu cliente ao seu negócio
              </p>
            </div>
            <div class="trigger col-lg-6" data-aos="zoom-in">
              <img src="~/assets/images/flutter.svg" alt="Linguagem de programação Flutter" title="Linguagem de programação Flutter" />
              <h3>Ferramentas mais modernas do mercado</h3>
              <p>
                Websites e aplicativos desenvolvidos com as ferramentas mais modernas e utilizadas do mercado (NodeJS, VueJS, Flutter)
              </p>
            </div>
          </section>
        </div>
      </div>
      <div id="portfolio-section" class="content-section">
        <div class="text-center">
          <h2 data-aos="fade-down">Trabalhos</h2>
          <p data-aos="fade-right">Confira alguns de nossos trabalhos já realizados</p>
        </div>
        <section class="pt-5 d-flex flex-column flex-lg-row">
          <article class="portfolio-card" data-aos="zoom-in">
            <picture>
              <source srcset="~/assets/images/mf_foto_video/mf_foto_video_1280.jpg" media="(max-width: 992px)" />
              <source srcset="~/assets/images/mf_foto_video/mf_foto_video_640.jpg" media="(max-width: 1600px)" />
              <source srcset="~/assets/images/mf_foto_video/mf_foto_video_1280.jpg" media="(max-width: 2000px)" />
              <img src="~/assets/images/mf_foto_video/mf_foto_video_640.jpg" alt="Print do site MarcosFilipe.site" />
            </picture>
            <div class="portfolio-details">
              <div>
                <h3>Website</h3>
              </div>
              <p>Marcos Filipe - Foto e Vídeo</p>
              <a href="http://www.marcosfilipe.site/" target="_new" class="btn btn-secondary rounded-pill px-4">Acessar</a>
            </div>
          </article>
          <article class="portfolio-card" data-aos="zoom-in">
            <picture>
              <source srcset="~/assets/images/fazentech/fazentech_1280.jpg" media="(max-width: 992px)" />
              <source srcset="~/assets/images/fazentech/fazentech_640.jpg" media="(max-width: 1600px)" />
              <source srcset="~/assets/images/fazentech/fazentech_1280.jpg" media="(max-width: 2000px)" />
              <img src="~/assets/images/fazentech/fazentech_640.jpg" alt="Print das telas do aplicativo Fazentech" />
            </picture>
            <div class="portfolio-details">
              <div>
                <h3>Aplicativo</h3>
              </div>
              <p>FazenTech</p>
              <a href="https://github.com/HenriqueFelixDev/fazentech" target="_new" class="btn btn-secondary rounded-pill px-4">Acessar</a>
            </div>
          </article>
        </section>
      </div>
      <div id="contact-section" class="contact-section bg-primary text-light">
        <section>
          <div class="text-center">
            <h2 data-aos="fade-down">Faça o seu orçamento</h2>
            <p data-aos="fade-right">
              E aí, gostou de algum projeto? Entre em contato e faça o seu orçamento agora mesmo.
            </p>
            <a  href="https://api.whatsapp.com/send?phone=+5531983489321" target="_new" class="btn btn-secondary rounded-pill px-3 p-md-3 px-md-5" data-aos="zoom-in">Fazer orçamento</a>
          </div>
        </section>
      </div>
    </main>
    <footer class="text-center">
      <nav class="navbar d-inline-block">
        <ul class="nav flex-column flex-md-row align-items-center">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img src="~/assets/images/logo/logo.png" height="60" alt="HenriqueFelix.dev Logo" />
            </a>
          </li>
          <li class="nav-item">
            <a href="#home-section" class="nav-link">Início</a>
          </li>
          <li class="nav-item">
            <a href="#about-section" class="nav-link">Como Trabalhamos</a>
          </li>
          <li class="nav-item">
            <a href="#portfolio-section" class="nav-link">Trabalhos</a>
          </li>
          <li class="nav-item">
            <a href="#contact-section" class="nav-link">Contato</a>
          </li>
        </ul>
      </nav>
      <span class="d-block d-md-inline">Telefone: <a href="tel:+5531983489321" class="text-secondary">+55 (31) 9 8348-9321</a></span>
      <span class="ml-3 d-none d-md-inline">|</span>
      <ul class="nav d-inline-block">
        <li class="nav-item d-inline-block">
          <a
            href="https://www.linkedin.com/in/henrique-felix-dev/"
            class="nav-link"
            target="_new"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li class="nav-item d-inline-block">
          <a href="https://www.instagram.com/henriquefelix.dev/" class="nav-link" target="_new">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li class="nav-item d-inline-block">
          <a href="https://github.com/HenriqueFelixDev" class="nav-link" target="_new">
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"

export default {
  mounted () {
    new AOS.init({ disable: "phone" })
  }
}
</script>

<style scoped>
#home-section {
  background:
    linear-gradient(to bottom, rgba(63, 69, 210, 0.9), rgba(63, 69, 210, 0.9)),
    url('~/assets/images/background/background_1280.jpg')
    no-repeat
    center center/cover;
}
</style>
