import { X } from 'lucide-react';
import { Button } from './ui/button';
import logoIcon from 'figma:asset/2c5848e95a597673eb275401bac36c477dc768a8.png';

interface PoliticaCookiesProps {
  onClose: () => void;
}

export function PoliticaCookies({ onClose }: PoliticaCookiesProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="CUSTODEX" className="w-10 h-10" />
            <h2 className="text-[#1a1d3a]">Política de Cookies</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 text-gray-700 max-h-[70vh] overflow-y-auto">
          <section>
            <h3 className="text-[#1a1d3a] mb-3">1. ¿Qué son las cookies?</h3>
            <p className="text-sm leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">2. ¿Cómo utilizamos las cookies?</h3>
            <p className="text-sm leading-relaxed mb-3">
              En <strong>CUSTODEX Asesores</strong> (asesoriaydefensaglobal.com) utilizamos cookies para mejorar la experiencia del usuario en nuestro sitio web. Las cookies nos ayudan a:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Recordar sus preferencias de navegación y configuración</li>
              <li>Entender cómo utiliza nuestro sitio web mediante análisis estadísticos</li>
              <li>Mejorar la funcionalidad y rendimiento del sitio</li>
              <li>Personalizar el contenido que le mostramos</li>
              <li>Recordar si ha aceptado o rechazado el uso de cookies</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">3. Tipos de cookies que utilizamos</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-900 mb-2">3.1. Cookies técnicas o necesarias</h4>
                <p className="text-sm leading-relaxed">
                  Son aquellas imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación básica y el uso de diferentes funcionalidades. Sin estas cookies, algunos servicios no pueden funcionar correctamente.
                </p>
                <ul className="text-sm space-y-1 pl-5 list-disc mt-2">
                  <li><strong>Finalidad:</strong> Permitir la navegación y uso básico del sitio</li>
                  <li><strong>Duración:</strong> Sesión (se eliminan al cerrar el navegador)</li>
                  <li><strong>Gestor:</strong> CUSTODEX Asesores</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 mb-2">3.2. Cookies de preferencias</h4>
                <p className="text-sm leading-relaxed">
                  Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve el sitio, como su idioma preferido o la región en la que se encuentra.
                </p>
                <ul className="text-sm space-y-1 pl-5 list-disc mt-2">
                  <li><strong>Finalidad:</strong> Recordar preferencias del usuario</li>
                  <li><strong>Duración:</strong> 1 año</li>
                  <li><strong>Gestor:</strong> CUSTODEX Asesores</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 mb-2">3.3. Cookies analíticas o de medición</h4>
                <p className="text-sm leading-relaxed">
                  Nos permiten analizar el uso del sitio web para que podamos medir y mejorar el rendimiento. Nos ayudan a saber qué páginas son las más y menos populares, y ver cómo los visitantes se mueven por el sitio.
                </p>
                <ul className="text-sm space-y-1 pl-5 list-disc mt-2">
                  <li><strong>Finalidad:</strong> Estadísticas de uso y mejora del sitio</li>
                  <li><strong>Duración:</strong> 2 años</li>
                  <li><strong>Gestor:</strong> Google Analytics (terceros)</li>
                  <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Política de privacidad de Google</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 mb-2">3.4. Cookies de consentimiento</h4>
                <p className="text-sm leading-relaxed">
                  Almacenan su elección sobre el uso de cookies en nuestro sitio web (si las ha aceptado o rechazado).
                </p>
                <ul className="text-sm space-y-1 pl-5 list-disc mt-2">
                  <li><strong>Finalidad:</strong> Recordar la preferencia del usuario sobre cookies</li>
                  <li><strong>Duración:</strong> 1 año</li>
                  <li><strong>Gestor:</strong> CUSTODEX Asesores</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">4. Cookies de terceros</h3>
            <p className="text-sm leading-relaxed mb-3">
              Algunos servicios externos almacenan cookies limitadas para el usuario. Estas cookies no son establecidas por este sitio web, pero algunas sirven para el correcto funcionamiento de servicios integrados en el sitio:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><strong>Google Analytics:</strong> Para obtener estadísticas de navegación y mejorar nuestros servicios.</li>
              <li><strong>Google Maps:</strong> Si utilizamos mapas integrados para mostrar nuestra ubicación.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Estas empresas utilizan las cookies según sus propias políticas de privacidad, que puede consultar en sus respectivos sitios web.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">5. ¿Cómo gestionar o deshabilitar las cookies?</h3>
            <p className="text-sm leading-relaxed mb-3">
              Cuando accede por primera vez a nuestro sitio web, se muestra un banner informativo sobre el uso de cookies. Puede aceptar o rechazar el uso de cookies mediante los botones disponibles en el banner.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              Además, puede configurar su navegador para aceptar, rechazar o eliminar cookies. La forma de hacerlo depende del navegador que utilice:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de cookies en Chrome</a></li>
              <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de cookies en Firefox</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de cookies en Safari</a></li>
              <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de cookies en Edge</a></li>
              <li><strong>Opera:</strong> <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de cookies en Opera</a></li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              <strong>Importante:</strong> Si bloquea el uso de cookies en su navegador, es posible que algunas funcionalidades del sitio web no estén disponibles o que su experiencia de navegación se vea afectada.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">6. Consentimiento</h3>
            <p className="text-sm leading-relaxed">
              Al hacer clic en "Aceptar" en nuestro banner de cookies, usted consiente el uso de cookies de acuerdo con esta Política de Cookies. Puede retirar su consentimiento en cualquier momento borrando las cookies de su navegador y modificando sus preferencias.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">7. Actualización de la Política de Cookies</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios mediante el sitio web.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">8. Más información</h3>
            <p className="text-sm leading-relaxed">
              Para obtener más información sobre cómo tratamos sus datos personales, consulte nuestra <strong>Política de Privacidad</strong>.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Si tiene dudas sobre esta Política de Cookies, puede contactar con nosotros a través de:
            </p>
            <ul className="text-sm space-y-1 pl-5 list-none mt-2">
              <li>📧 <strong>Email:</strong> info@asesoriaydefensaglobal.com</li>
              <li>📞 <strong>Teléfono:</strong> 91 903 68 14</li>
              <li>📍 <strong>Dirección:</strong> Pl. del Turía, 4 – Local 2, posterior, 28934 Móstoles, Madrid</li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Última actualización:</strong> Octubre 2025<br />
              <strong>Titular:</strong> CUSTODEX Asesores - Asesoría y Defensa Global<br />
              <strong>Normativa aplicable:</strong> Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE) y Reglamento (UE) 2016/679 (RGPD)
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 rounded-b-2xl p-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-[#1a1d3a] hover:bg-[#2a2d4a] text-white"
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
