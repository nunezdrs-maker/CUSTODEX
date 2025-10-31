import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set document title
    document.title = 'CUSTODEX Asesores - Asesoría Fiscal, Laboral y Jurídica en Madrid';

    // Set basic meta description
    const description = 'Asesoría profesional en Móstoles, Madrid. Servicios de asesoría fiscal, laboral y jurídica. Gestión de IVA, nóminas, contratos, herencias y más. Llámanos al 91 903 68 14';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  }, []);

  return null;
}
