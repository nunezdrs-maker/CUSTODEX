import { X } from 'lucide-react';
import { Button } from './ui/button';
import logoIcon from 'figma:asset/2c5848e95a597673eb275401bac36c477dc768a8.png';

interface PoliticaPrivacidadProps {
  onClose: () => void;
}

export function PoliticaPrivacidad({ onClose }: PoliticaPrivacidadProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="CUSTODEX" className="w-10 h-10" />
            <h2 className="text-[#1a1d3a]">Política de Privacidad</h2>
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
            <h3 className="text-[#1a1d3a] mb-3">1. Responsable del Tratamiento</h3>
            <p className="text-sm leading-relaxed">
              <strong>Denominación:</strong> CUSTODEX Asesores<br />
              <strong>Nombre comercial:</strong> Asesoría y Defensa Global<br />
              <strong>Domicilio:</strong> Pl. del Turía, 4 – Local 2, posterior, 28934 Móstoles, Madrid<br />
              <strong>Correo electrónico:</strong> info@asesoriaydefensaglobal.com<br />
              <strong>Teléfono:</strong> 91 903 68 14
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">2. Finalidad del Tratamiento de Datos</h3>
            <p className="text-sm leading-relaxed mb-3">
              Los datos personales que nos facilite a través del formulario de contacto del sitio web serán tratados con las siguientes finalidades:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Atender y gestionar su solicitud de información o contacto.</li>
              <li>Proporcionarle información sobre nuestros servicios de asesoría fiscal, laboral y jurídica.</li>
              <li>Gestionar la prestación de servicios profesionales contratados.</li>
              <li>Enviarle comunicaciones comerciales sobre nuestros servicios, únicamente si ha dado su consentimiento expreso.</li>
              <li>Cumplir con las obligaciones legales que nos sean aplicables.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">3. Base Jurídica del Tratamiento</h3>
            <p className="text-sm leading-relaxed mb-3">
              El tratamiento de sus datos personales se basa en:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><strong>Consentimiento del interesado:</strong> Al facilitar sus datos a través del formulario de contacto, usted nos otorga su consentimiento para el tratamiento de los mismos.</li>
              <li><strong>Ejecución de un contrato:</strong> Cuando los datos sean necesarios para la prestación de nuestros servicios profesionales.</li>
              <li><strong>Interés legítimo:</strong> Para la gestión y mejora de nuestros servicios.</li>
              <li><strong>Obligación legal:</strong> Cumplimiento de obligaciones fiscales, contables y normativas aplicables a nuestra actividad.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">4. Datos Recogidos</h3>
            <p className="text-sm leading-relaxed mb-3">
              A través del formulario de contacto recogemos los siguientes datos:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Servicio de interés (opcional)</li>
              <li>Mensaje o consulta</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              No recogemos datos especialmente protegidos (datos de salud, origen racial, opiniones políticas, etc.) salvo que sean estrictamente necesarios para la prestación del servicio solicitado y cuente con su consentimiento explícito.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">5. Conservación de Datos</h3>
            <p className="text-sm leading-relaxed">
              Sus datos personales serán conservados mientras se mantenga la relación comercial o contractual, o hasta que solicite su supresión. Una vez finalizada la relación, los datos se conservarán bloqueados durante los plazos legales exigidos por la normativa fiscal, mercantil y de protección de datos aplicable (generalmente entre 4 y 6 años).
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">6. Destinatarios de los Datos</h3>
            <p className="text-sm leading-relaxed mb-3">
              Sus datos personales no serán cedidos a terceros, salvo en los siguientes casos:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Organismos públicos (Agencia Tributaria, Seguridad Social, Juzgados, etc.) cuando sea legalmente obligatorio.</li>
              <li>Proveedores de servicios tecnológicos necesarios para la gestión del sitio web (hosting, email, etc.), que actúan como encargados del tratamiento bajo estrictas cláusulas de confidencialidad.</li>
              <li>Otros profesionales colaboradores (abogados, procuradores, peritos) cuando sea necesario para la prestación del servicio contratado.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">7. Derechos del Interesado</h3>
            <p className="text-sm leading-relaxed mb-3">
              Conforme al RGPD y la LOPDGDD, usted tiene derecho a:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tratamos sobre usted.</li>
              <li><strong>Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Derecho de supresión ("derecho al olvido"):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos personales.</li>
              <li><strong>Derecho de limitación del tratamiento:</strong> Solicitar la restricción del tratamiento en determinadas circunstancias.</li>
              <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común.</li>
              <li><strong>Derecho a retirar el consentimiento:</strong> En cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Para ejercer cualquiera de estos derechos, puede dirigirse a nosotros mediante correo electrónico a <strong>info@asesoriaydefensaglobal.com</strong> o por escrito a nuestro domicilio social, adjuntando copia de su DNI o documento identificativo equivalente.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Asimismo, le informamos de su derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aepd.es</a>) si considera que el tratamiento de sus datos no se ajusta a la normativa.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">8. Medidas de Seguridad</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">9. Uso de Cookies</h3>
            <p className="text-sm leading-relaxed">
              Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del usuario, realizar análisis estadísticos y mostrar contenidos personalizados. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Al acceder a nuestro sitio web, se mostrará un banner informativo sobre el uso de cookies. Puede aceptar, rechazar o configurar el uso de cookies según sus preferencias. Para más información, consulte nuestra Política de Cookies (disponible en el banner de cookies).
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">10. Enlaces a Terceros</h3>
            <p className="text-sm leading-relaxed">
              El sitio web puede contener enlaces a sitios web de terceros. CUSTODEX Asesores no se hace responsable de las políticas de privacidad de dichos sitios web. Le recomendamos leer las políticas de privacidad de cada sitio que visite.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">11. Actualización de la Política de Privacidad</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o cambios en la práctica empresarial. Cualquier modificación será debidamente publicada en el sitio web con antelación suficiente a su aplicación.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">12. Consentimiento</h3>
            <p className="text-sm leading-relaxed">
              Al utilizar nuestro sitio web y facilitarnos sus datos personales a través del formulario de contacto, usted acepta expresamente la presente Política de Privacidad y consiente el tratamiento de sus datos personales conforme a lo establecido en la misma.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Última actualización:</strong> Octubre 2025<br />
              <strong>Normativa aplicable:</strong> Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD) y Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).<br /><br />
              Para cualquier consulta relacionada con esta Política de Privacidad o para ejercer sus derechos, puede contactar con nosotros en:<br />
              📧 info@asesoriaydefensaglobal.com<br />
              📞 91 903 68 14<br />
              📍 Pl. del Turía, 4 – Local 2, posterior, 28934 Móstoles, Madrid
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
