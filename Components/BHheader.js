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
                 <li><a class="link" href="/Brideshead/brideshead.html">Brideshead Revisited</a></li>
                <li><a class="link" href="../HarryPartch/harry_partch.html">Harry Partch</a></li>
            </ul> 
        </nav>
        <h1>Candle-Lit Scene | Brideshead</h1>
        <p>This site is a continuous work in progress!</p>
    </header>
    `;
  }
}

customElements.define('header-component', Header);