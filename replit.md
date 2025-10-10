# Iglesia Luterana del Lago Llanquihue - Website

## Overview
Professional, responsive static website for the Lutheran Church of Lake Llanquihue (iglesialuteranadellago.cl). Built with HTML5, Bootstrap 5, custom CSS, and minimal JavaScript. Mobile-first design with WCAG AA accessibility compliance.

## Project Architecture

### Structure
```
/
├── index.html           # Home page with hero, activities, and sections preview
├── nosotros.html       # About Us page with history and team
├── calendario.html     # Calendar page with Google Calendar integration
├── cultos.html         # Services page with gallery and celebrations
├── iglesias.html       # Churches page with dynamic JSON loading
├── contacto.html       # Contact page with pastor cards and form
├── css/
│   └── styles.css      # Custom styles with color palette
├── js/
│   └── script.js       # Dynamic functionality (churches loading, contact form)
├── assets/
│   └── img/
│       ├── logo.png    # Church logo (cross and mountain)
│       └── church.png  # Church building illustration
└── data/
    └── data-iglesias.json  # Churches data (5 locations)
```

### Technologies
- **HTML5**: Semantic markup with accessibility features
- **Bootstrap 5**: Via CDN for responsive grid and components
- **Custom CSS**: Color palette implementation and responsive design
- **JavaScript**: Vanilla JS for dynamic content loading
- **Google Fonts**: Nunito font family
- **Bootstrap Icons**: Icon library via CDN

### Color Palette
- `--azul-marino`: #1e3a5f (Navy Blue) - Primary brand color
- `--azul-claro`: #4a90e2 (Light Blue) - Accent color
- `--celeste`: #87ceeb (Sky Blue) - Hover states
- `--blanco-cremita`: #faf8f3 (Cream White) - Background
- `--gris-claro`: #f8f9fa (Light Gray) - Section backgrounds

### Key Features
1. **Sticky Navigation**: Fixed navbar with mobile collapse
2. **Hero Section**: Full-width hero with gradient overlay
3. **Dynamic Churches**: JSON-based church locations loading
4. **Calendar Integration**: Google Calendar embed with monthly/agenda tabs
5. **Contact Form**: mailto functionality with form validation
6. **Social Media**: Facebook integration
7. **Responsive Design**: Mobile-first approach with breakpoints at 576px, 768px, 1200px

### Pages Content

#### Home (index.html)
- Hero section with Lake Llanquihue imagery
- CTAs to Cultos and Calendar
- Latest activities cards (3)
- Preview sections for all main pages
- Social media footer

#### Nosotros (nosotros.html)
- Church history and origins
- Team member cards (6 roles)
- CTA to contact page

#### Calendario (calendario.html)
- Tabs for Monthly/Agenda views
- Embedded Google Calendar iframes
- Regular activities overview (4 cards)

#### Cultos (cultos.html)
- Explanation of Lutheran services
- Image gallery (3 cards)
- Special celebrations section (Matrimonios, Bautismos, Funerales)
- CTA to contact

#### Iglesias (iglesias.html)
- Dynamically loaded from data-iglesias.json
- 5 church locations around Lake Llanquihue:
  - Frutillar
  - Llanquihue (Totoral)
  - Puerto Octay (Fonck)
  - Nueva Braunau
  - Los Bajos
- Each card: photo, address, schedule, map link

#### Contacto (contacto.html)
- 4 pastor cards with names and clickable phone numbers
- Contact form (nombre, email, teléfono, mensaje)
- mailto implementation for form submission
- Facebook social link

## Development Setup

### Running the Server
The project uses Python's built-in HTTP server:
```bash
python -m http.server 5000
```

The workflow is configured to automatically serve on port 5000.

### Deployment Ready
- All CDN resources properly linked
- No build process required
- Static files ready for any web host
- Prepared for HTTPS deployment
- Domain: iglesialuteranadellago.cl

## SEO & Accessibility

### SEO Features
- Meta descriptions on all pages
- Semantic HTML5 structure
- Descriptive alt text for images
- Mobile-responsive design
- Clean URL structure

### Accessibility (WCAG AA)
- Proper heading hierarchy
- ARIA labels on interactive elements
- High contrast text
- Keyboard navigation support
- Screen reader friendly
- Focus states on interactive elements

## Recent Changes
- **October 10, 2025**: Initial website creation
  - Created all 6 main pages
  - Implemented responsive design
  - Added dynamic churches loading
  - Integrated Google Calendar
  - Set up contact form with mailto
  - Configured color palette and styling
  - Added Facebook social integration

## Future Enhancements
- Add actual pastor photos and names
- Include real Lake Llanquihue hero image
- Set up EmailJS for proper form handling
- Add more church activity photos
- Implement blog section for news
- Add Instagram integration
- Include photo gallery pages
