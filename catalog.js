// Sample product data
const products = [
    {
        id: 1,
        name: "Laptop Pro",
        description: "Potente laptop para profesionales",
        price: 1299.99,
        stock: 15,
        icon: "💻"
    },
    {
        id: 2,
        name: "Smartphone X",
        description: "Última generación de smartphone",
        price: 899.99,
        stock: 23,
        icon: "📱"
    },
    {
        id: 3,
        name: "Auriculares Wireless",
        description: "Sonido premium sin cables",
        price: 199.99,
        stock: 45,
        icon: "🎧"
    },
    {
        id: 4,
        name: "Tablet Ultra",
        description: "Perfecta para trabajo y ocio",
        price: 599.99,
        stock: 18,
        icon: "📲"
    },
    {
        id: 5,
        name: "Smartwatch Elite",
        description: "Monitor de actividad avanzado",
        price: 349.99,
        stock: 30,
        icon: "⌚"
    },
    {
        id: 6,
        name: "Cámara Digital 4K",
        description: "Captura momentos en alta definición",
        price: 799.99,
        stock: 12,
        icon: "📷"
    },
    {
        id: 7,
        name: "Mouse Ergonómico",
        description: "Comodidad durante horas de trabajo",
        price: 49.99,
        stock: 67,
        icon: "🖱️"
    },
    {
        id: 8,
        name: "Teclado Mecánico",
        description: "Experiencia de escritura superior",
        price: 129.99,
        stock: 34,
        icon: "⌨️"
    },
    {
        id: 9,
        name: "Monitor 27\" 4K",
        description: "Imagen nítida y colores vibrantes",
        price: 449.99,
        stock: 21,
        icon: "🖥️"
    },
    {
        id: 10,
        name: "Altavoz Bluetooth",
        description: "Sonido potente y portátil",
        price: 89.99,
        stock: 52,
        icon: "🔊"
    },
    {
        id: 11,
        name: "Disco SSD 1TB",
        description: "Almacenamiento rápido y confiable",
        price: 119.99,
        stock: 40,
        icon: "💾"
    },
    {
        id: 12,
        name: "Webcam HD",
        description: "Videollamadas en alta calidad",
        price: 79.99,
        stock: 28,
        icon: "📹"
    }
];

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <span class="product-stock">En stock: ${product.stock}</span>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Initialize catalog when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProducts);
