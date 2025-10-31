# ✅ Configuración del Formulario de Contacto con Resend

El formulario de contacto está configurado con **Resend** para enviar emails automáticamente a **Custodexasesores@gmail.com**.

---

## 🎯 Configuración Actual (Modo Sandbox)

Debido a las limitaciones del plan gratuito de Resend con el dominio sandbox (`onboarding@resend.dev`), los emails se envían a **nunezdrs@gmail.com** y luego se **reenvían automáticamente** a Custodexasesores@gmail.com.

### ⚙️ Configurar Reenvío Automático en Gmail (2 minutos)

Sigue estos pasos desde la cuenta **nunezdrs@gmail.com**:

1. **Abre Gmail** en [https://mail.google.com](https://mail.google.com)
2. Haz clic en el icono de **⚙️ Configuración** (arriba a la derecha)
3. Selecciona **"Ver toda la configuración"**
4. Ve a la pestaña **"Reenvío y correo POP/IMAP"**
5. En la sección **"Reenvío"**, haz clic en **"Añadir una dirección de reenvío"**
6. Escribe: `Custodexasesores@gmail.com`
7. Haz clic en **"Siguiente"** → **"Continuar"**
8. **Gmail enviará un código de confirmación a Custodexasesores@gmail.com**
9. Abre **Custodexasesores@gmail.com** y busca el email de confirmación
10. Copia el **código de confirmación** o haz clic en el enlace
11. Vuelve a **nunezdrs@gmail.com** → Configuración → Reenvío
12. Pega el código de confirmación
13. Selecciona **"Reenviar una copia del correo entrante a Custodexasesores@gmail.com"**
14. Elige si quieres **conservar la copia** en nunezdrs@gmail.com o eliminarla
15. Haz clic en **"Guardar cambios"**

### 📋 Crear Filtro Automático (Opcional pero Recomendado)

Para que SOLO los emails de CUSTODEX se reenvíen automáticamente:

1. En Gmail (nunezdrs@gmail.com), haz clic en el icono de **búsqueda** 🔍
2. En **"De"** escribe: `onboarding@resend.dev`
3. En **"Asunto"** escribe: `[CUSTODEX]`
4. Haz clic en **"Crear filtro"**
5. Marca las opciones:
   - ✅ **"Reenviar a: Custodexasesores@gmail.com"**
   - ✅ **"Aplicar la etiqueta: CUSTODEX"** (crea la etiqueta)
   - (Opcional) **"Marcar como leído"**
   - (Opcional) **"Archivar"** (para no llenar tu bandeja de entrada)
6. Haz clic en **"Crear filtro"**

¡Listo! Ahora todos los formularios llegarán automáticamente a **Custodexasesores@gmail.com** sin intervención manual.

---

## 🚀 Solución Permanente: Verificar Dominio Propio

Si tienes acceso al panel de control del dominio **asesoriaydefensaglobal.com**, puedes configurar Resend para enviar desde tu propio dominio y eliminar la necesidad de reenvío.

### Pasos:

1. **Ve a Resend Domains:**
   - Abre [https://resend.com/domains](https://resend.com/domains)
   - Haz clic en **"Add Domain"**

2. **Agrega tu dominio:**
   - Escribe: `asesoriaydefensaglobal.com`
   - Haz clic en **"Add"**

3. **Configura los registros DNS:**
   
   Resend te mostrará 3 registros DNS que debes agregar en tu proveedor de dominio:
   
   **a) Registro SPF (TXT):**
   ```
   Tipo: TXT
   Nombre: @
   Valor: v=spf1 include:resend.com ~all
   ```
   
   **b) Registro DKIM (TXT):**
   ```
   Tipo: TXT
   Nombre: resend._domainkey
   Valor: [Resend te dará el valor único]
   ```
   
   **c) Registro DMARC (TXT):**
   ```
   Tipo: TXT
   Nombre: _dmarc
   Valor: v=DMARC1; p=none
   ```

4. **Verifica el dominio:**
   - Después de agregar los registros DNS (puede tomar hasta 48h)
   - Vuelve a Resend y haz clic en **"Verify"**
   - Si todo está correcto, verás un ✅ verde

5. **Actualiza el código:**
   
   En `/supabase/functions/server/index.tsx`, cambia la línea 59:
   ```typescript
   from: "CUSTODEX <contacto@asesoriaydefensaglobal.com>",
   to: ["Custodexasesores@gmail.com"],
   ```

**Beneficios:**
- ✅ Emails desde tu propio dominio (más profesional)
- ✅ Sin necesidad de reenvío
- ✅ Mejor tasa de entrega (menos spam)
- ✅ Sin límites de destinatarios
- ✅ Tracking de emails (aperturas, clicks)

---

## 📧 Cómo Funciona Actualmente

```
Usuario completa formulario
       ↓
Frontend valida datos
       ↓
Envía a servidor Supabase
       ↓
Servidor llama API de Resend
       ↓
Resend envía email a nunezdrs@gmail.com
       ↓
Gmail reenvía automáticamente
       ↓
📬 Email llega a Custodexasesores@gmail.com
```

---

## 🎨 Contenido del Email

Cada email incluye:

✅ **Asunto:** "📋 [CUSTODEX] Nueva solicitud de contacto"

✅ **Información del contacto:**
- Nombre completo
- Email (con link clickeable para responder)
- Teléfono (con link clickeable para llamar)  
- Servicio de interés (Fiscal, Laboral, Jurídica)

✅ **Mensaje completo** del cliente con formato preservado

✅ **Diseño profesional** con HTML y CSS inline

✅ **Footer** con origen del mensaje

---

## 🧪 Probar el Formulario

1. Ve a la página web de CUSTODEX
2. Desplázate a la sección **"Agenda tu cita"**
3. Completa el formulario:
   - Nombre y apellidos *(obligatorio)*
   - Email *(obligatorio, validado)*
   - Teléfono *(obligatorio)*
   - Servicio de interés *(opcional)*
   - Mensaje *(obligatorio)*
4. Haz clic en **"Enviar solicitud"**
5. Verás una notificación de éxito ✅
6. **El email llegará en segundos:**
   - Primero a **nunezdrs@gmail.com**
   - Luego se reenvía automáticamente a **Custodexasesores@gmail.com**

---

## 🐛 Solución de Problemas

### ❌ No llegan los emails a nunezdrs@gmail.com

1. **Verifica que RESEND_API_KEY esté configurada:**
   - Ve a tu Dashboard de Supabase
   - Project Settings → Edge Functions → Secrets
   - Debe existir `RESEND_API_KEY`

2. **Revisa los logs del servidor:**
   - Dashboard de Supabase → Functions → Logs
   - Busca errores en `/send-email`

3. **Revisa la carpeta de spam** en nunezdrs@gmail.com

4. **Verifica tu API Key de Resend:**
   - Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
   - Asegúrate de que la key esté activa
   - Si es necesario, genera una nueva y actualiza `RESEND_API_KEY`

---

### ❌ No se reenvían a Custodexasesores@gmail.com

1. **Verifica que el reenvío esté activado:**
   - Abre nunezdrs@gmail.com
   - Configuración → Reenvío y correo POP/IMAP
   - Debe decir: "Reenviar una copia a Custodexasesores@gmail.com"

2. **Confirma que el filtro funcione:**
   - Busca un email de CUSTODEX en nunezdrs@gmail.com
   - Verifica que tenga la etiqueta "CUSTODEX"
   - Si no, el filtro no se aplicó

3. **Revisa spam en Custodexasesores@gmail.com:**
   - Los emails reenviados pueden ir a spam
   - Marca como "No es spam" y agrega a contactos

---

### ❌ Error 401: "Invalid API key"

**Causa:** La API key es incorrecta o expiró.

**Solución:**
1. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
2. Copia tu API key activa (o genera una nueva)
3. Ve a Supabase → Project Settings → Edge Functions → Secrets
4. Actualiza `RESEND_API_KEY` con el nuevo valor
5. **Importante:** Despliega de nuevo las Edge Functions

---

### ❌ Error 422: "Validation error"

**Causa:** El email "to" no está permitido en modo sandbox.

**Solución:** Este error ya está resuelto enviando a nunezdrs@gmail.com (tu email verificado). Si aún ocurre:
1. Ve a [https://resend.com/settings](https://resend.com/settings)
2. Verifica que nunezdrs@gmail.com sea el email de la cuenta
3. Si usas otro email, actualiza la línea 60 en `/supabase/functions/server/index.tsx`

---

## 📊 Límites del Plan Gratuito de Resend

- ✅ **100 emails/día**
- ✅ **3,000 emails/mes**
- ✅ Suficiente para la mayoría de pequeñas empresas

**Para más volumen:**
- Plan Pro: $20/mes → 50,000 emails/mes
- Plan Business: $85/mes → 250,000 emails/mes

---

## 🔒 Seguridad

✅ **API Key protegida:** Solo en el servidor, nunca en frontend  
✅ **Servidor seguro:** Autenticado con Supabase  
✅ **Validación doble:** Frontend + Backend  
✅ **Sin almacenamiento:** Los datos solo se envían por email  
✅ **HTTPS:** Todas las comunicaciones encriptadas  

---

## ✅ ¿Qué está ya configurado?

- ✅ Servidor Supabase con endpoint `/send-email`
- ✅ Integración con API de Resend
- ✅ API Key de Resend (`RESEND_API_KEY`)
- ✅ Validación de formularios (frontend y backend)
- ✅ Notificaciones toast de éxito/error
- ✅ Plantilla HTML profesional para emails
- ✅ Destinatario: nunezdrs@gmail.com (verificado en Resend)
- ⏳ **PENDIENTE:** Configurar reenvío automático a Custodexasesores@gmail.com

---

## ✨ Características del Formulario

- ✅ Validación en tiempo real con regex
- ✅ Estados de carga mientras se envía
- ✅ Notificaciones toast elegantes (Sonner)
- ✅ Limpieza automática después del envío exitoso
- ✅ Diseño responsive (móvil y desktop)
- ✅ Iconos profesionales (Lucide React)
- ✅ Manejo robusto de errores
- ✅ Logs detallados para debugging
- ✅ Accesibilidad (labels, aria-labels)

---

## 📞 Soporte

**Problemas con Resend:**  
https://resend.com/support

**Documentación de Resend:**  
https://resend.com/docs

**API Reference:**  
https://resend.com/docs/api-reference/emails/send-email

**Dashboard de Resend:**  
https://resend.com/emails (ver historial de emails enviados)

---

## ✅ Checklist de Configuración

Marca cuando completes cada paso:

- [ ] Configurar reenvío en nunezdrs@gmail.com → Custodexasesores@gmail.com
- [ ] Confirmar código en Custodexasesores@gmail.com
- [ ] Crear filtro automático para emails de CUSTODEX
- [ ] Probar envío desde el formulario
- [ ] Confirmar recepción en Custodexasesores@gmail.com
- [ ] Marcar como "No es spam" si es necesario
- [ ] (Opcional) Configurar dominio propio en Resend
- [ ] ¡Listo para producción! 🚀

---

## 🎯 Próximos Pasos Recomendados

1. **Corto plazo:** Configurar reenvío automático (2 minutos)
2. **Mediano plazo:** Verificar dominio asesoriaydefensaglobal.com
3. **Largo plazo:** Considerar upgrade a plan Pro si excedes 100 emails/día
