# Guía de Despliegue - CUSTODEX

## Estado actual

La aplicación ha sido simplificada para evitar errores de build y facilitar el despliegue en cualquier plataforma.

## Cambios realizados

### ✅ Backend simplificado
- El servidor en `/supabase/functions/server/index.tsx` ahora solo contiene un endpoint de health check
- Se eliminaron todas las dependencias problemáticas (Resend, kv_store, etc.)
- Solo usa Hono con CORS, sin dependencias JSR que causen errores de npm

### ✅ Formulario de contacto
- El formulario ahora usa `mailto:` para abrir el cliente de correo predeterminado del usuario
- Los datos se pre-rellenan en el email para facilitar el envío
- Email destino: `Custodexasesores@gmail.com`
- Sin dependencias de APIs externas ni servicios de terceros

### ✅ Sin dependencias problemáticas
- No hay imports de JSR (`jsr:`)
- No hay dependencias de Supabase en el código activo
- Solo dependencias estándar de npm/React

## Estructura simplificada

```
/
├── App.tsx                    # Aplicación principal con formulario mailto
├── components/
│   ├── SEO.tsx               # Meta tags para SEO
│   ├── CookieBanner.tsx      # Banner de cookies (RGPD)
│   ├── PoliticaPrivacidad.tsx
│   ├── TerminosCondiciones.tsx
│   ├── PoliticaCookies.tsx
│   └── ui/                    # Componentes shadcn/ui
├── supabase/functions/server/
│   └── index.tsx             # Servidor minimalista (solo health check)
└── styles/globals.css        # Estilos globales
```

## Despliegue

Esta aplicación ahora puede desplegarse sin problemas en:
- ✅ Vercel
- ✅ Netlify
- ✅ Fly.io
- ✅ Cualquier hosting estático

### Comandos de build
```bash
npm install
npm run build
```

## Funcionamiento del formulario

1. El usuario completa el formulario de contacto
2. Al hacer clic en "Enviar solicitud"
3. Se abre el cliente de correo predeterminado (Gmail, Outlook, etc.)
4. El email está pre-rellenado con:
   - Destinatario: Custodexasesores@gmail.com
   - Asunto: "Solicitud de contacto - CUSTODEX"
   - Cuerpo: Todos los datos del formulario formateados
5. El usuario solo necesita hacer clic en "Enviar"

## Ventajas de este enfoque

- ✅ Sin dependencias de APIs externas
- ✅ Sin costos adicionales de servicios
- ✅ Sin problemas de configuración
- ✅ Sin errores de build
- ✅ Funciona en cualquier dispositivo
- ✅ El usuario puede editar el mensaje antes de enviar
- ✅ Se usa el cliente de correo que el usuario prefiere

## Notas

- La aplicación es completamente estática excepto por el pequeño servidor de health check
- No requiere configuración de variables de entorno
- No necesita APIs keys de terceros
- El formulario es completamente funcional mediante mailto:
