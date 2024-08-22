import './components/card/card.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .card-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 20px;
                padding: 10px;
            }
        </style>
        <h1>Bienvenido a Nintendo Store</h1>
        <div class="card-container">
            <my-card
              img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/legend-zelda-3029268.jpg?tf=3840x"
              alt="Imagen de Zelda"
              title="The Legend of Zelda amiibo"
              description="Potencia tu juego con los amiibo de la colección The Legend of Zelda."
              linktext="¡Completa tu colección!"
              link="https://store.nintendo.es/es/games/enhance-your-play-games/amiibo?c_franchise=The+Legend+of+Zelda&orderable_only=true&sort=newest-products"
            ></my-card>
            <my-card
              img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
              alt="Imagen de la promoción"
              title="Megapromoción 12+2"
              description="2 meses adicionales al comprar cualquier suscripción de 12 meses."
              linktext="Ver más detalles"
              link="https://store.nintendo.es/es/games/enhance-your-play-games/nintendo-switch-online-games"
            ></my-card>
            <my-card
              img="https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/NOE/000000000010006981/1.1_ProductTile_Accessories_Nintendo64Controller_OutOfBox_enNOE"
              alt="Imagen del mando de Nintendo 64"
              title="Mando de Nintendo 64"
              description="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar!"
              linktext="Comprar"
              link="https://store.nintendo.es/es/mando-de-nintendo-64-n64-para-nintendo-switch-000000000010006981"
            ></my-card>
        </div>
        `;
    }
}

customElements.define('app-container', AppContainer);
