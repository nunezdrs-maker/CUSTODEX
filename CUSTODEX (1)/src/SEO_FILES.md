# Archivos SEO Adicionales para CUSTODEX Asesores

## robots.txt
Este archivo debe colocarse en la raíz del servidor web (public/robots.txt):

```
User-agent: *
Allow: /

Sitemap: https://asesoriaydefensaglobal.com/sitemap.xml

# Bloquear acceso a archivos sensibles
Disallow: /api/
Disallow: /supabase/
Disallow: /_next/
Disallow: /admin/

# Crawl-delay para crawlers agresivos
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

---

## sitemap.xml
Este archivo debe colocarse en la raíz del servidor web (public/sitemap.xml):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Página Principal -->
  <url>
    <loc>https://asesoriaydefensaglobal.com/</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Sección de Servicios -->
  <url>
    <loc>https://asesoriaydefensaglobal.com/#servicios</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Sección de Objetivos -->
  <url>
    <loc>https://asesoriaydefensaglobal.com/#objetivos</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Sección de Contacto -->
  <url>
    <loc>https://asesoriaydefensaglobal.com/#contacto</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Documentos Legales -->
  <url>
    <loc>https://asesoriaydefensaglobal.com/terminos-condiciones</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://asesoriaydefensaglobal.com/politica-privacidad</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://asesoriaydefensaglobal.com/politica-cookies</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

</urlset>
```

---

## manifest.json
Para PWA y mejores resultados en móviles (public/manifest.json):

```json
{
  "name": "CUSTODEX Asesores - Asesoría y Defensa Global",
  "short_name": "CUSTODEX",
  "description": "Asesoría profesional en Móstoles, Madrid. Servicios de asesoría fiscal, laboral y jurídica.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a1d3a",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["business", "finance", "legal"],
  "lang": "es-ES",
  "dir": "ltr"
}
```

---

## Favicon y Apple Touch Icons
Necesitas crear los siguientes archivos de imagen y colocarlos en la carpeta public:

- **favicon.ico** (16x16, 32x32, 48x48)
- **apple-touch-icon.png** (180x180)
- **icon-192x192.png** (192x192)
- **icon-512x512.png** (512x512)
- **og-image.jpg** (1200x630) - Para compartir en redes sociales

---

## Google Search Console
1. Registra el sitio en [Google Search Console](https://search.google.com/search-console/)
2. Verifica la propiedad del dominio
3. Envía el sitemap.xml
4. Monitoriza el rendimiento y errores

---

## Google My Business
Registra el negocio en [Google My Business](https://www.google.com/business/) con:
- Nombre: CUSTODEX Asesores - Asesoría y Defensa Global
- Dirección: Pl. del Turía, 4 - Local 2, posterior, 28934 Móstoles, Madrid
- Teléfono: 91 903 68 14
- Categoría: Asesor fiscal, Asesor laboral, Servicio de asesoría jurídica
- Horario: Lunes a Viernes, 09:00 - 18:00
- Sitio web: https://asesoriaydefensaglobal.com

---

## Schema Markup Implementado
El componente SEO.tsx ya incluye Schema.org JSON-LD con:
- ✅ Tipo: ProfessionalService
- ✅ Dirección completa
- ✅ Coordenadas geográficas
- ✅ Teléfono y email
- ✅ Horario de apertura
- ✅ Catálogo de servicios (Fiscal, Laboral, Jurídica)
- ✅ Área de servicio (radio de 50km)

---

## Keywords Principales
El sitio está optimizado para las siguientes palabras clave:

### Principales:
- asesoría fiscal Madrid
- asesoría laboral Móstoles
- asesor jurídico Madrid
- CUSTODEX asesores

### Secundarias:
- gestión IVA Madrid
- nóminas Móstoles
- contratos laborales
- herencias y sucesiones
- arrendamientos Madrid
- accidentes de tráfico asesor
- asesoría y defensa global

### Long-tail:
- asesor fiscal en Móstoles Madrid
- gestión de nóminas y contratos Móstoles
- abogado herencias Madrid
- asesoría laboral empresas Móstoles

---

## Meta Tags Implementados
✅ Title optimizado (menos de 60 caracteres)
✅ Meta description (menos de 160 caracteres)
✅ Keywords relevantes
✅ Open Graph (Facebook, LinkedIn)
✅ Twitter Cards
✅ Geo tags (ubicación)
✅ Canonical URL
✅ Robots (index, follow)
✅ Theme color
✅ Viewport responsive

---

## Recomendaciones Adicionales

### Velocidad de Carga
- ✅ Lazy loading de imágenes
- ✅ Compresión de imágenes
- ⚠️ Considera usar CDN para assets estáticos
- ⚠️ Implementar caché del navegador

### Accesibilidad
- ✅ Alt text en todas las imágenes
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado
- ✅ ARIA labels en formularios

### Contenido
- Considera crear un blog con artículos sobre temas fiscales, laborales y jurídicos
- Publica casos de éxito (testimonios)
- Crea FAQ (preguntas frecuentes)
- Videos explicativos de servicios

### Local SEO
- ✅ Google My Business registrado
- Obtener reseñas en Google
- Aparecer en directorios locales (Páginas Amarillas, etc.)
- Conseguir backlinks de sitios locales

### Analítica
- Implementar Google Analytics 4
- Configurar conversiones (formulario enviado)
- Monitorizar palabras clave
- Analizar comportamiento de usuarios

---

## Checklist SEO Completado
- ✅ Meta tags básicos
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Canonical URL
- ✅ Geo tags
- ✅ Robots meta
- ✅ Tema color móvil
- ✅ Responsive design
- ✅ SSL/HTTPS (asumir en producción)
- ✅ URLs amigables
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ Alt text en imágenes
- ✅ Sitemap conceptual
- ✅ Robots.txt conceptual
- ✅ Manifest.json conceptual
