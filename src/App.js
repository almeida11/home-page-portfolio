import './App.css';

function App() {
  return (
    <div className="App">
        <div class="navbar">
            <div class="sticky">
                <div class="max-width">
                    <div class="logo"><a href="#">Port</a><span>fólio</span></div>
                    <ul class="menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <div class="menu-btn">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        <section class="home" id="home">
                <div class="home-content">
                  <div class="text-1">Olá, meu nome é</div>
                  <div class="text-2">Mateus Almeida</div>
                  <div class="text-3">eu sou <span>Desenvolvedor Web</span></div> 
                </div>
        </section>
    </div>
  );
}

export default App;
