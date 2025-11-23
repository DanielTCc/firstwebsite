// Sample sales data
const salesData = [
    {
        date: "2024-11-22",
        product: "Laptop Pro",
        quantity: 2,
        total: 2599.98,
        status: "completed"
    },
    {
        date: "2024-11-22",
        product: "Smartphone X",
        quantity: 3,
        total: 2699.97,
        status: "completed"
    },
    {
        date: "2024-11-21",
        product: "Auriculares Wireless",
        quantity: 5,
        total: 999.95,
        status: "completed"
    },
    {
        date: "2024-11-21",
        product: "Tablet Ultra",
        quantity: 1,
        total: 599.99,
        status: "completed"
    },
    {
        date: "2024-11-20",
        product: "Smartwatch Elite",
        quantity: 4,
        total: 1399.96,
        status: "completed"
    },
    {
        date: "2024-11-20",
        product: "Cámara Digital 4K",
        quantity: 2,
        total: 1599.98,
        status: "completed"
    },
    {
        date: "2024-11-19",
        product: "Monitor 27\" 4K",
        quantity: 3,
        total: 1349.97,
        status: "completed"
    },
    {
        date: "2024-11-19",
        product: "Teclado Mecánico",
        quantity: 6,
        total: 779.94,
        status: "completed"
    },
    {
        date: "2024-11-18",
        product: "Mouse Ergonómico",
        quantity: 8,
        total: 399.92,
        status: "completed"
    },
    {
        date: "2024-11-18",
        product: "Altavoz Bluetooth",
        quantity: 5,
        total: 449.95,
        status: "pending"
    }
];

// Product sales aggregation
const topProducts = [
    { name: "Laptop Pro", units: 45, revenue: 58499.55 },
    { name: "Smartphone X", units: 38, revenue: 34199.62 },
    { name: "Monitor 27\" 4K", units: 32, revenue: 14399.68 },
    { name: "Tablet Ultra", units: 28, revenue: 16799.72 },
    { name: "Cámara Digital 4K", units: 24, revenue: 19199.76 }
];

// Calculate statistics
function calculateStats() {
    const totalSales = salesData.reduce((sum, sale) => sum + sale.total, 0);
    const totalProducts = salesData.reduce((sum, sale) => sum + sale.quantity, 0);
    const totalOrders = salesData.filter(sale => sale.status === "completed").length;
    const totalCustomers = 156; // Sample static number

    return {
        totalSales,
        totalProducts,
        totalOrders,
        totalCustomers
    };
}

// Render statistics
function renderStats() {
    const stats = calculateStats();
    
    document.getElementById('totalSales').textContent = `$${stats.totalSales.toFixed(2)}`;
    document.getElementById('totalProducts').textContent = stats.totalProducts;
    document.getElementById('totalOrders').textContent = stats.totalOrders;
    document.getElementById('totalCustomers').textContent = stats.totalCustomers;
}

// Render sales table
function renderSalesTable() {
    const tableBody = document.getElementById('salesTableBody');
    
    salesData.forEach(sale => {
        const row = document.createElement('tr');
        
        const statusClass = sale.status === 'completed' ? 'status-completed' : 'status-pending';
        const statusText = sale.status === 'completed' ? 'Completado' : 'Pendiente';
        
        row.innerHTML = `
            <td>${sale.date}</td>
            <td>${sale.product}</td>
            <td>${sale.quantity}</td>
            <td>$${sale.total.toFixed(2)}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Render top products
function renderTopProducts() {
    const topProductsList = document.getElementById('topProductsList');
    
    topProducts.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'top-product-item';
        
        productItem.innerHTML = `
            <div class="top-product-info">
                <span class="product-rank">#${index + 1}</span>
                <div>
                    <div class="top-product-name">${product.name}</div>
                    <small>${product.units} unidades vendidas</small>
                </div>
            </div>
            <div class="top-product-sales">$${product.revenue.toFixed(2)}</div>
        `;
        
        topProductsList.appendChild(productItem);
    });
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderSalesTable();
    renderTopProducts();
});
