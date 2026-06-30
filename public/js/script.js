document.addEventListener('DOMContentLoaded', function() {
    loadChurches();
    setupContactForm();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').catch(function(err) {
            console.warn('Service worker registration failed:', err);
        });
    });
}

function loadChurches() {
    const container = document.getElementById('iglesias-container');
    
    if (!container) return;
    
    fetch('data/data-iglesias.json')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            
            data.forEach(iglesia => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4';
                
                col.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <img src="${iglesia.imagen}" class="card-img-top" alt="${iglesia.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${iglesia.nombre}</h5>
                            <p class="card-text">${iglesia.descripcion}</p>
                            <p class="mb-2">
                                <i class="bi bi-geo-alt text-primary"></i>
                                <strong>Dirección:</strong> ${iglesia.direccion}
                            </p>
                            <p class="mb-3">
                                <i class="bi bi-clock text-primary"></i>
                                <strong>Horario:</strong> ${iglesia.horario}
                            </p>
                            <a href="${iglesia.mapa}" target="_blank" rel="noopener" class="btn btn-outline-primary w-100">
                                <i class="bi bi-map"></i> Ver en el Mapa
                            </a>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            });
        })
        .catch(error => {
            console.error('Error loading churches:', error);
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger" role="alert">
                        Error al cargar las iglesias. Por favor, intenta más tarde.
                    </div>
                </div>
            `;
        });
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const telefono = formData.get('telefono');
        const mensaje = formData.get('mensaje');
        
        const subject = encodeURIComponent(`Consulta desde el sitio web - ${nombre}`);
        const body = encodeURIComponent(
            `Nombre: ${nombre}\n` +
            `Email: ${email}\n` +
            `Teléfono: ${telefono}\n\n` +
            `Mensaje:\n${mensaje}`
        );
        
        window.location.href = `mailto:contacto@iglesialuteranadellago.cl?subject=${subject}&body=${body}`;
        
        messageDiv.className = 'alert alert-success';
        messageDiv.textContent = 'Abriendo tu cliente de correo electrónico...';
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            form.reset();
            messageDiv.style.display = 'none';
        }, 3000);
    });
}

const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
}
