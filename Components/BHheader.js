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
                <li><a class="link" href="../Brideshead/brideshead.html">Brideshead Revisited</a></li>
                <li><a class="link" href="Pentiment/Pentiment.html">Pentiment</a></li>
                <li><a class="link" href="/My Work/MyWork.html">My Work</a></li>
            </ul> 
        </nav>
        <h1>Candle-Lit Scene | Brideshead</h1>
        <p>This site is a continuous work in progress!</p>
    </header>
    `;
  }
}

customElements.define('header-component', Header);