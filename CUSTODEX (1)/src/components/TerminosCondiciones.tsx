import { X } from 'lucide-react';
import { Button } from './ui/button';
import logoIcon from 'figma:asset/2c5848e95a597673eb275401bac36c477dc768a8.png';

interface TerminosCondicionesProps {
  onClose: () => void;
}

export function TerminosCondiciones({ onClose }: TerminosCondicionesProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="CUSTODEX" className="w-10 h-10" />
            <h2 className="text-[#1a1d3a]">Términos y Condiciones de Uso</h2>
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
            <h3 className="text-[#1a1d3a] mb-3">1. Identificación del Titular</h3>
            <p className="text-sm leading-relaxed">
              <strong>Denominación social:</strong> CUSTODEX Asesores<br />
              <strong>Nombre comercial:</strong> Asesoría y Defensa Global<br />
              <strong>Domicilio social:</strong> Pl. del Turía, 4 – Local 2, posterior, 28934 Móstoles, Madrid<br />
              <strong>Correo electrónico:</strong> info@asesoriaydefensaglobal.com<br />
              <strong>Teléfono:</strong> 91 903 68 14
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">2. Objeto de los Términos</h3>
            <p className="text-sm leading-relaxed">
              El presente documento regula el acceso y uso del sitio web <strong>asesoriaydefensaglobal.com</strong> (en adelante, el Sitio Web), propiedad de CUSTODEX Asesores, así como los servicios de asesoría fiscal, laboral y jurídica ofrecidos a través del mismo.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">3. Servicios Ofrecidos</h3>
            <p className="text-sm leading-relaxed mb-3">
              CUSTODEX Asesores ofrece servicios profesionales de asesoramiento en las siguientes áreas:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li><strong>Asesoría Fiscal:</strong> Gestión y presentación de declaraciones, liquidación de obligaciones tributarias, IVA, impuestos sobre transmisiones patrimoniales, sucesiones y donaciones.</li>
              <li><strong>Asesoría Laboral:</strong> Asesoramiento en contratos laborales, permisos y beneficios, revisión de nóminas, tramitación de pensiones y empleados de hogar.</li>
              <li><strong>Asesoría Jurídica:</strong> Derecho de familia, arrendamientos, reclamaciones, accidentes de tráfico, herencias y asesoramiento legal previo.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">4. Condiciones de Uso del Sitio Web</h3>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>El acceso al Sitio Web es gratuito, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario.</li>
              <li>El uso de determinados servicios ofrecidos a través del Sitio Web puede estar sujeto a condiciones particulares que, según los casos, sustituyen, completan y/o modifican las presentes condiciones.</li>
              <li>El usuario se compromete a utilizar el Sitio Web de conformidad con la ley y las presentes Condiciones de Uso, así como con la moral y las buenas costumbres generalmente aceptadas.</li>
              <li>Queda prohibido el uso del Sitio Web con fines ilegales o no autorizados.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">5. Naturaleza del Asesoramiento</h3>
            <p className="text-sm leading-relaxed">
              El asesoramiento prestado por CUSTODEX Asesores constituye orientación profesional especializada. Sin embargo, las decisiones finales corresponden al cliente. CUSTODEX Asesores no se hace responsable de las consecuencias derivadas de decisiones tomadas por el cliente sin seguir las recomendaciones proporcionadas o de información incompleta o inexacta facilitada por el cliente.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">6. Propiedad Intelectual</h3>
            <p className="text-sm leading-relaxed">
              Todos los contenidos del Sitio Web, incluyendo pero no limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a CUSTODEX Asesores, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">7. Protección de Datos Personales</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores se compromete a proteger la privacidad de sus usuarios y clientes. Los datos personales facilitados a través del formulario de contacto serán tratados conforme a lo establecido en la Política de Privacidad, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">8. Limitación de Responsabilidad</h3>
            <p className="text-sm leading-relaxed mb-3">
              CUSTODEX Asesores no será responsable de:
            </p>
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Los daños y perjuicios derivados de la falta de disponibilidad, continuidad o calidad del funcionamiento del Sitio Web y de los servicios, salvo que sean imputables a CUSTODEX Asesores.</li>
              <li>Los daños ocasionados por el uso inadecuado del Sitio Web por parte de los usuarios.</li>
              <li>Los perjuicios derivados de decisiones del cliente basadas en información incompleta, inexacta o no actualizada proporcionada por el propio cliente.</li>
              <li>Los contenidos de páginas web de terceros a las que se pueda acceder mediante enlaces desde el Sitio Web.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">9. Confidencialidad</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores garantiza la confidencialidad de toda la información y documentación facilitada por sus clientes, conforme a la normativa vigente y al secreto profesional que rige la actividad de asesoramiento.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">10. Modificación de los Términos</h3>
            <p className="text-sm leading-relaxed">
              CUSTODEX Asesores se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el Sitio Web y entrarán en vigor desde el momento de su publicación. Se recomienda a los usuarios revisar periódicamente las Condiciones de Uso.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">11. Enlaces a Terceros</h3>
            <p className="text-sm leading-relaxed">
              El Sitio Web puede contener enlaces a sitios web de terceros. CUSTODEX Asesores no controla ni asume responsabilidad alguna por el contenido de dichos sitios web. El acceso a los mismos se realiza bajo la exclusiva responsabilidad del usuario.
            </p>
          </section>

          <section>
            <h3 className="text-[#1a1d3a] mb-3">12. Legislación Aplicable y Jurisdicción</h3>
            <p className="text-sm leading-relaxed">
              Estos Términos y Condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con el Sitio Web o los servicios ofrecidos, las partes se someten expresamente a los juzgados y tribunales de Madrid capital, renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Última actualización:</strong> Octubre 2025<br />
              Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactar con nosotros en:<br />
              📧 info@asesoriaydefensaglobal.com<br />
              📞 91 903 68 14
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
