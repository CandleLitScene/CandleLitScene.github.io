class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
            <ul>
                <li><a class="link" href="/index.html">Homepage</a></li>
                <li><a class="link" href="../Brideshead.html">Brideshead Revisited</a></li>
                <li><a class="link" href="../Pentiment.html">Pentiment</a></li>
                <li><a class="link" href="/MyWork.html">My Work</a></li>
                <li><a class="link" href="/Durer.html">Dürer</a></li>

            </ul> 
        </nav>
        <h1>Candle-Lit Scene | Clouds</h1>
        <p>This site is a continuous work in progress!</p>
    </header>
    `;
  }
}

customElements.define('header-component', Header);