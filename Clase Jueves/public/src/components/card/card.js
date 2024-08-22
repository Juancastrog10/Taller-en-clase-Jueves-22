class MyCard extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'description', 'linktext', 'link'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/card/card.css">
            <div class="product-card">
                <div class="product-card-content">
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                    <a href="${this.link}">${this.linktext}</a>
                </div>
                <img src="${this.img}" alt="${this.alt}">
            </div>
        `;
    }
}

if (!customElements.get('my-card')) {
    customElements.define('my-card', MyCard);
}
export default MyCard;
