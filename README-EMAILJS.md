# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione correctamente y envíe correos electrónicos a tu dirección, necesitas configurar EmailJS siguiendo estos pasos:

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y regístrate para obtener una cuenta gratuita.
2. Inicia sesión en tu cuenta.

## Paso 2: Configurar un servicio de correo electrónico

1. En el panel de control de EmailJS, haz clic en "Email Services" en el menú lateral.
2. Haz clic en "Add New Service".
3. Selecciona el proveedor de correo electrónico que deseas utilizar (Gmail, Outlook, etc.).
4. Sigue las instrucciones para conectar tu cuenta de correo electrónico.
5. Una vez conectado, anota el `Service ID` que se te asigna.

## Paso 3: Crear una plantilla de correo electrónico

1. En el panel de control de EmailJS, haz clic en "Email Templates" en el menú lateral.
2. Haz clic en "Create New Template".
3. Diseña tu plantilla de correo electrónico. Puedes usar las siguientes variables en tu plantilla:
   - `{{name}}` - Nombre o empresa del remitente
   - `{{email}}` - Email del remitente
   - `{{message}}` - Mensaje del remitente
   - `{{to_email}}` - Tu dirección de correo electrónico (jaumefernandezsunyer10@gmail.com)
4. Guarda la plantilla y anota el `Template ID` que se te asigna.

## Paso 4: Obtener tu Public Key

1. En el panel de control de EmailJS, haz clic en "Account" en el menú lateral.
2. Busca tu "Public Key" en la sección "API Keys".

## Paso 5: Actualizar el código en Contact.jsx

Abre el archivo `src/components/Contact.jsx` y actualiza las siguientes líneas con tus propios valores:

```javascript
// Líneas 33-35
const serviceId = 'service_id'; // Reemplazar con tu service ID de EmailJS
const templateId = 'template_id'; // Reemplazar con tu template ID de EmailJS
const publicKey = 'public_key'; // Reemplazar con tu public key de EmailJS
```

## Plan gratuito de EmailJS

Con el plan gratuito de EmailJS, puedes enviar hasta 200 correos electrónicos al mes, lo que debería ser suficiente para un sitio web con tráfico moderado. Si necesitas enviar más correos, puedes considerar actualizar a un plan de pago.

## Solución de problemas

Si tienes problemas con el envío de correos electrónicos:

1. Verifica que los IDs y la clave pública sean correctos.
2. Asegúrate de que tu servicio de correo esté correctamente configurado en EmailJS.
3. Comprueba la consola del navegador para ver si hay errores.
4. Verifica que las variables en tu plantilla coincidan con los nombres de los parámetros en el código.

Para más información, consulta la [documentación oficial de EmailJS](https://www.emailjs.com/docs/).
