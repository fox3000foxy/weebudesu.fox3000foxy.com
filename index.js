// ===== Constants & Global Variables =====
let productsList = [{"id":"1","title":"WeebuDesu T-Shirt","price":16.99,"images":["weebudesu_tshirt_center_black.png","weebudesu_tshirt_center_white.png","weebudesu_tshirt_center_green.png","weebudesu_tshirt_center_blue.png","weebudesu_tshirt_center_red.png","weebudesu_tshirt_center_darkgreen.png","weebudesu_tshirt_center_lime.png","weebudesu_tshirt_left_white.png","weebudesu_tshirt_left_black.png","weebudesu_tshirt_left_green.png","weebudesu_tshirt_left_blue.png","weebudesu_tshirt_left_red.png","weebudesu_tshirt_left_lime.png","weebudesu_tshirt_left_darkgreen.png"],"description":"This vibrant t-shirt features the WeebuDesu logo prominently in the center. Made from soft, breathable fabric, it's perfect for casual outings or lounging at home.","variants":[{"id":"1-1","label":"Black","imageIndex":0},{"id":"1-2","label":"White","imageIndex":1},{"id":"1-3","label":"Green","imageIndex":2},{"id":"1-4","label":"Blue","imageIndex":3},{"id":"1-5","label":"Red","imageIndex":4},{"id":"1-6","label":"Dark Green","imageIndex":5},{"id":"1-7","label":"Lime","imageIndex":6},{"id":"1-8","label":"Left White","imageIndex":7},{"id":"1-9","label":"Left Black","imageIndex":8},{"id":"1-10","label":"Left Green","imageIndex":9},{"id":"1-11","label":"Left Blue","imageIndex":10},{"id":"1-12","label":"Left Red","imageIndex":11},{"id":"1-13","label":"Left Lime","imageIndex":12},{"id":"1-14","label":"Left Dark Green","imageIndex":13}]},{"id":"2","title":"WeebuDesu Sweat","price":19.99,"images":["weebudesu_sweat_center_black.png","weebudesu_sweat_center_white.png","weebudesu_sweat_center_green.png","weebudesu_sweat_center_blue.png","weebudesu_sweat_center_red.png","weebudesu_sweat_left_white.png","weebudesu_sweat_left_black.png","weebudesu_sweat_left_green.png","weebudesu_sweat_left_blue.png","weebudesu_sweat_left_red.png"],"description":"Show your love for WeebuDesu with this stylish t-shirt featuring the logo on the left chest. Crafted from high-quality cotton, this shirt is both comfortable and fashionable.","variants":[{"id":"2-1","label":"Center Black","imageIndex":0},{"id":"2-2","label":"Center White","imageIndex":1},{"id":"2-3","label":"Center Green","imageIndex":2},{"id":"2-4","label":"Center Blue","imageIndex":3},{"id":"2-5","label":"Center Red","imageIndex":4},{"id":"2-6","label":"Left White","imageIndex":5},{"id":"2-7","label":"Left Black","imageIndex":6},{"id":"2-8","label":"Left Green","imageIndex":7},{"id":"2-9","label":"Left Blue","imageIndex":8},{"id":"2-10","label":"Left Red","imageIndex":9}]},{"id":"3","title":"WeebuDesu Cap","price":3.99,"images":["weebudesu_cap.png","weebudesu_cap_green.png","weebudesu_cap_blue.png","weebudesu_cap_red.png"],"description":"Stay stylish and protected from the sun with the WeebuDesu cap. Featuring an adjustable strap and the iconic logo, this cap is perfect for outdoor activities or casual wear.","variants":[{"id":"3-1","label":"Standard","imageIndex":0},{"id":"3-2","label":"Green","imageIndex":1},{"id":"3-3","label":"Blue","imageIndex":2},{"id":"3-4","label":"Red","imageIndex":3}]},{"id":"4","title":"WeebuDesu Stickers","price":0.99,"images":["weebudesu_stickers_1.png","weebudesu_stickers_2.png","weebudesu_stickers_3.png","weebudesu_stickers_4.png","weebudesu_stickers_5.png","weebudesu_stickers_6.png","weebudesu_stickers_7.png","weebudesu_stickers_8.png","weebudesu_stickers_9.png","weebudesu_stickers_10.png","weebudesu_stickers_11.png","weebudesu_stickers_12.png","weebudesu_stickers_13.png"],"description":"Express yourself with these WeebuDesu stickers! Each pack contains a variety of designs featuring the WeebuDesu logo and other fun graphics. Perfect for personalizing your belongings.","variants":[{"id":"4-1","label":"Pack 1","imageIndex":0},{"id":"4-2","label":"Pack 2","imageIndex":1},{"id":"4-3","label":"Pack 3","imageIndex":2},{"id":"4-4","label":"Pack 4","imageIndex":3},{"id":"4-5","label":"Pack 5","imageIndex":4},{"id":"4-6","label":"Pack 6","imageIndex":5},{"id":"4-7","label":"Pack 7","imageIndex":6},{"id":"4-8","label":"Pack 8","imageIndex":7},{"id":"4-9","label":"Pack 9","imageIndex":8},{"id":"4-10","label":"Pack 10","imageIndex":9},{"id":"4-11","label":"Pack 11","imageIndex":10},{"id":"4-12","label":"Pack 12","imageIndex":11},{"id":"4-13","label":"Pack 13","imageIndex":12}]}] // Cette balise est remplacée par le serveur
let products = productsList.sort((a, b) => a.price - b.price);
const headerLinks = ["/", "/blogs", "/products", "/cart", "/about", "/contact", "/login", "/settings"];
let currentUrl = location.pathname;

// ===== Style Injection =====
const navButtonStyle = document.createElement('style');
navButtonStyle.textContent = `
    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 18px;
        transition: background 0.3s;
        z-index: 2;
    }
    
    .nav-button:hover {
        background: rgba(0, 0, 0, 0.8);
    }
    
    .nav-button.left {
        left: 0;
        border-radius: 0 3px 3px 0;
    }
    
    .nav-button.right {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

	.product-image {
		background-size: contain !important;
		background-position: center !important;
		background-repeat: no-repeat !important;
	}

	#versionContainer > img {
		background-color: rgba(255, 255, 255, 0.5);
	}

    img {
        user-select: none;
    }
`;
document.head.appendChild(navButtonStyle);

// ===== Utility Functions =====
function queryStringToJSON(qs = location.search.slice(1)) {
    return Object.fromEntries(
        qs.split('&').map(pair => {
            const [key, value = ''] = pair.split('=');
            return [key, decodeURIComponent(value)];
        })
    );
}

function changeImage(productIndex, direction) {
    const product = products[productIndex];
    const productImageContainer = document.querySelector(`.product-image[data-index="${productIndex}"]`);
    const currentBackgroundImage = productImageContainer.style.backgroundImage;
    const currentImageIndex = product.images.findIndex(image => currentBackgroundImage.includes(image));
    let newImageIndex = currentImageIndex + direction;

    if (newImageIndex < 0) newImageIndex = product.images.length - 1;
    else if (newImageIndex >= product.images.length) newImageIndex = 0;

    productImageContainer.style.backgroundImage = `url('./products/${product.images[newImageIndex]}')`;
}

// ===== Navigation & Sliding Functions =====
function enableSliding() {
    const currentIndex = headerLinks.indexOf(location.pathname);
    
    document.querySelectorAll(".slidifiable").forEach(slidifiable => {
        const url = slidifiable.href.split(location.host)[1];
        const urlIndex = headerLinks.indexOf(url);
        
        slidifiable.onclick = e => e.preventDefault();
        slidifiable.className = `slidifiable ${
            currentIndex < urlIndex + 1 ? "slidable" :
            currentIndex >= urlIndex ? "slidableReverse" : ""
        }${currentIndex === urlIndex ? " activeLink" : ""}`;
        
        if (slidifiable.classList.contains("slidable")) {
            slidifiable.onclick = assignSlidables;
        } else if (slidifiable.classList.contains("slidableReverse")) {
            slidifiable.onclick = slidifiable.classList.contains("non-reversable") ? 
                assignSlidables : assignSlidablesReverse;
        }
    });
}

function handleSlide(e, isReverse = false) {
    e.preventDefault();
    const targetUrl = this.getAttribute('href');
    
    if (targetUrl === currentUrl) return;
    if (targetUrl === "/support") {
        location.href = "https://discord.com/invite/Fx3sfch5SK";
        return;
    }
    
    currentUrl = targetUrl;
    history.pushState(null, '', targetUrl);
    
    const container = document.querySelector('main.container');
    const slideClass = isReverse ? 'slide-out-reverse' : 'slide-out';
    container.classList.add(slideClass);
    
    setTimeout(() => {
        fetch(targetUrl)
            .then(response => response.text())
            .then(data => {
                const doc = new DOMParser().parseFromString(data, 'text/html');
                container.innerHTML = doc.querySelector('main.container').innerHTML;
                container.id = location.pathname.replace("/", "");
                document.title = doc.querySelector('title').innerText;
                
                if (targetUrl === "/products") productsThing();
                if (location.pathname === "/productsDetails") productsDetails();
                
                enableSliding();
                
                container.classList.remove(slideClass);
                const newSlideClass = isReverse ? 'slide-in-reverse' : 'slide-in';
                container.classList.add(newSlideClass);
                
                setTimeout(() => container.classList.remove(newSlideClass), 300);
            });
    }, 300);
}

const assignSlidables = function(e) { handleSlide.call(this, e, false); };
const assignSlidablesReverse = function(e) { handleSlide.call(this, e, true); };

// ===== Products Functions =====
function productsThing() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.sort((a, b) => a.price - b.price).forEach((product) => {
        const productCard = createProductCard(product, product.id);
        productGrid.appendChild(productCard);
    });

    setupPagination();
}

function createProductCard(product, index) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <div style="text-decoration:none;color:white;" class="slidable">
            <div class="product-image-container" style="position: relative;">
                <a href="/productsDetails?productId=${index}" class="slidifiable non-reversable">
                    <div class="product-image" style="background: url('./products/${product.images[0]}'), linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));" data-index="${index}"></div>
                </a>
                <button class="nav-button left" onclick="changeImage(${index}, -1); event.preventDefault();">&#10094;</button>
                <button class="nav-button right" onclick="changeImage(${index}, 1); event.preventDefault();">&#10095;</button>
            </div>
        </div>
        <a href="/productsDetails?productId=${index}" class="slidifiable non-reversable" style="text-decoration:none;color:white;">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">€${product.price.toFixed(2)}</p>
                <div class="color-swatches">
                    ${product.images.map((image, idx) => `
                        <div class="color-swatch" 
                             style="background-image: url('./products/${image}');" 
                             class="product-image"
                             data-index="${idx}" 
                             onclick="changeImage(${index}, 0); event.preventDefault();">
                        </div>
                    `).join('')}
                </div>
            </div>
        </a>
    `;
    return productCard;
}

function setupPagination() {
    const productsPerPage = 6;
    const productsElems = Array.from(document.querySelectorAll('.product-card'));
    const totalPages = Math.ceil(productsElems.length / productsPerPage);
    const pagination = document.querySelector('.pagination');

    if (products.length <= productsPerPage) {
        pagination.style.display = 'none';
        return;
    }

    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = createPaginationLink(i, productsElems, productsPerPage);
        pagination.appendChild(pageLink);
    }

    showPage(1, productsElems, productsPerPage);
}

function createPaginationLink(pageNum, productsElems, productsPerPage) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = pageNum;
    a.dataset.page = pageNum;
    a.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(pageNum, productsElems, productsPerPage);
        document.body.scrollTop = 0;
    });
    return a;
}

function showPage(page, productsElems, productsPerPage) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = page * productsPerPage;
    
    productsElems.forEach((product, index) => {
        product.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });

    document.querySelectorAll('.pagination a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.pagination a[data-page="${page}"]`).classList.add('active');
}

function productsDetails() {
    const params = queryStringToJSON();
    const product = products.find(p => p.id === params.productId);
    
    if (!product) return location.href = '/products';

    updateProductDetails(product, params.productId);
    setupProductImageNavigation(product, params.productId);
    document.getElementById('addToCartButton')?.addEventListener('click', addToCart);
}

function updateProductDetails(product, productId) {
    document.getElementById("productName").innerText = product.title;
    document.getElementById("productImage").src = `./products/${product.images[0]}`;
    document.getElementById("productImage").dataset.fullproductId = `${productId}-1`;
    document.getElementById("productDescription").innerText = product.description;
    document.getElementById("productPrice").innerText = `${product.price.toFixed(2)} €`;
}

function setupProductImageNavigation(product, productId) {
    const versionContainer = document.getElementById('versionContainer');
    versionContainer.innerHTML = '';

    product.images.forEach((image, index) => {
        const versionButton = document.createElement('img');
        versionButton.src = `./products/${image}`;
        versionButton.alt = `Version ${index + 1}`;
        versionButton.dataset.fullproductId = `${productId}-${index + 1}`;
        versionButton.dataset.index = index;
        versionButton.style.cssText = 'cursor: pointer; width: 100px; margin: 5px;';
        versionButton.onclick = () => {
            const productImage = document.getElementById("productImage");
            productImage.src = `./products/${image}`;
            productImage.dataset.fullproductId = `${productId}-${index + 1}`;
        };
        versionContainer.appendChild(versionButton);
    });
}

// ===== Cart Functions =====
function addToCart() {
    const productId = document.getElementById("productImage").dataset.fullproductId;
    
    fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: 1 })
    })
    .then(response => response.json())
    .then(data => document.getElementById("status").innerText = data.success ? `Added to Cart-chan!` : `Failed to add to Cart-chan!`)
    .catch(error => console.error('Error:', error));
}

// ===== Event Listeners =====
document.addEventListener("DOMContentLoaded", enableSliding);
window.addEventListener('popstate', () => location.reload());
window.addEventListener('contextmenu', (e) => {
    if(e.target.tagName === 'IMG') e.preventDefault();
});

// ===== Initial Page Load =====
if (location.pathname === "/products") productsThing();
if (location.pathname === "/productsDetails") productsDetails();