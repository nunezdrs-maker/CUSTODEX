import { Calendar, CheckCircle2, Shield, Target, TrendingDown, Users, Clock, MessageSquare, BarChart3, FileText, Sliders, Lock, MapPin, Phone, Mail, Send, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState, useCallback, memo } from 'react';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { CookieBanner } from './components/CookieBanner';
import { TerminosCondiciones } from './components/TerminosCondiciones';
import { PoliticaPrivacidad } from './components/PoliticaPrivacidad';
import { PoliticaCookies } from './components/PoliticaCookies';
import { SEO } from './components/SEO';
import heroBackground from 'figma:asset/d2d28b96d600ee1bfdabfe5a0d3130f6824ffe3b.png';
import objectivesImage from 'figma:asset/9af440f9937d5441f08b66ffc9a3a6aaec6718f1.png';
import contactImage from 'figma:asset/0fa3c554b8c7150514a78b4a8fede9e822f74a25.png';
import logoIcon from 'figma:asset/2c5848e95a597673eb275401bac36c477dc768a8.png';

// Optimized Counter animation component with memo
const AnimatedCounter = memo(({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

// Mobile Navigation Component
const MobileNav = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#objetivos', label: 'Sobre nosotros' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const handleClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 md:hidden"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl"
      >
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 right-4">
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-3 mb-8 mt-4">
            <img src={logoIcon} alt="CUSTODEX Logo" className="w-10 h-10" loading="eager" />
            <div>
              <div className="text-gray-900 font-semibold">CUSTODEX</div>
              <div className="text-gray-600 text-xs">Asesores</div>
            </div>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 text-lg"
              >
                {item.label}
              </a>
            ))}
            <a href="#contacto" onClick={handleClick}>
              <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                Pedir cita
              </Button>
            </a>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
});

MobileNav.displayName = 'MobileNav';

export default function App() {
  // Form state
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Modal states
  const [showTerminos, setShowTerminos] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Prevent scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSelectChange = useCallback((value: string) => {
    setFormData(prev => ({ ...prev, servicio: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
      toast.error('Por favor, completa todos los campos obligatorios');
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, introduce un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email usando Resend a través del servidor
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0b2e23d4/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio || 'No especificado',
          mensaje: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
      } else {
        console.error('Error response:', data);
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error al enviar email:', errorMessage);
      toast.error('Hubo un error al enviar el mensaje. Por favor, intenta contactarnos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <>
      <SEO />
      <Toaster position="top-center" richColors />
      <div className="min-h-screen bg-white">
        {/* Sticky Header - Responsive */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 mx-2 sm:mx-4 mt-2 sm:mt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white/75 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
                <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
                  <img src={logoIcon} alt="CUSTODEX Logo" className="w-10 h-10 sm:w-12 sm:h-12" loading="eager" />
                  <div>
                    <div className="text-gray-900 font-semibold text-sm sm:text-base">CUSTODEX</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Asesores</div>
                  </div>
                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                  <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">Inicio</a>
                  <a href="#servicios" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">Servicios</a>
                  <a href="#objetivos" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">Sobre nosotros</a>
                  <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">Contacto</a>
                </nav>
                
                {/* Desktop CTA */}
                <a href="#contacto" className="hidden md:block">
                  <Button 
                    variant="outline" 
                    className="bg-gray-800 border-gray-800 text-white hover:bg-gray-900 text-sm"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Pedir cita
                  </Button>
                </a>

                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Hero Section - Responsive */}
      <section 
        id="inicio"
        className="relative min-h-screen pt-20 sm:pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Background Image - solo desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        
        {/* Dark overlay - solo en desktop */}
        <div className="hidden md:block absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Content */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32 pb-16 sm:pb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Lock Icon */}
            <div className="mb-8 sm:mb-12">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-2xl">
                  <img src={logoIcon} alt="CUSTODEX" className="w-16 h-16 sm:w-20 sm:h-20" loading="eager" />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500/40 animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 max-w-4xl font-semibold px-4">
              Asesoría y Defensa para tus Proyectos
            </h1>
            
            <p className="text-white/90 text-base sm:text-lg max-w-3xl mb-6 sm:mb-8 leading-relaxed px-4">
              En nuestra asesoría en Madrid, contamos con un equipo de expertos altamente cualificados que te 
              acompañarán en cada paso de tus iniciativas. Nuestro objetivo es ser tu guía y apoyo continuo, ya 
              sea que estés impulsando un negocio en marcha o desarrollando una idea que desees convertir en 
              realidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 mx-auto justify-center">
              <a href="#contacto" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 shadow-lg shadow-gray-800/30">
                  <Calendar className="w-4 h-4 mr-2" />
                  Pedir cita
                </Button>
              </a>
              <a href="#servicios" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3">
                  <Sliders className="w-4 h-4 mr-2" />
                  Ver servicios
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Responsive */}
      <section id="servicios" className="py-12 sm:py-16 px-4 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl text-center mb-3 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Servicios
          </motion.h2>
          <motion.p 
            className="text-center text-gray-900 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soluciones integrales para particulares y empresas.
          </motion.p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Asesoría Fiscal */}
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-900">Asesoría Fiscal</h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Gestión y Presentación de Declaraciones del IRPF e Impuesto sobre el Patrimonio</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Gestión y Liquidación de Obligaciones Tributarias</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Gestión del Impuesto sobre Transmisiones Patrimoniales (ITP)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Gestión del Impuesto sobre Sucesiones y Donaciones</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>IVA</span>
                </li>
              </ul>
              
              <a href="#contacto" className="text-gray-900 text-sm hover:text-gray-700 transition-colors">
                + Información
              </a>
            </motion.div>

            {/* Asesoría Laboral */}
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-900">Asesoría Laboral</h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Asesoramiento de Contratos laborales y Novaciones contractuales</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Permisos y beneficios laborales (maternidad, excedencia...)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Revisión de recibos salariales y liquidaciones</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Tramitación de Pensiones ante el INSS</span>
                </li>
              </ul>
              
              <a href="#contacto" className="text-gray-900 text-sm hover:text-gray-700 transition-colors">
                + Información
              </a>
            </motion.div>

            {/* Asesoría Jurídica */}
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-900">Asesoría Jurídica</h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Derecho de Familia (separaciones, divorcios, modificación de medidas...)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Arrendamientos (alquileres, desahucios...)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Reclamaciones contra Seguros y Bancos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span>Accidentes de tráfico, herencias</span>
                </li>
              </ul>
              
              <a href="#contacto" className="text-gray-900 text-sm hover:text-gray-700 transition-colors">
                + Información
              </a>
            </motion.div>
          </div>

          {/* Stats - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-900 text-xs sm:text-sm mb-2">Años de experiencia</p>
              <p className="text-4xl sm:text-5xl text-gray-800">
                <AnimatedCounter end={12} suffix="+" />
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-900 text-xs sm:text-sm mb-2">Clientes satisfechos</p>
              <p className="text-4xl sm:text-5xl text-gray-800">
                <AnimatedCounter end={420} suffix="+" />
              </p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-900 text-xs sm:text-sm mb-2">Rentabilidad</p>
              <p className="text-4xl sm:text-5xl text-gray-800">
                <AnimatedCounter end={96} suffix="%" />
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section - Responsive */}
      <section id="objetivos" className="py-12 sm:py-16 px-4 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900 px-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros objetivos como asesoría
          </motion.h2>
          <motion.p 
            className="text-gray-700 mb-8 sm:mb-12 max-w-2xl px-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Acompañamiento continuo, cumplimiento normativo y optimización fiscal para tu tranquilidad.
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Actuar como mediadores y defensores</strong> en auditorías, inspecciones fiscales o disputas con la administración, buscando siempre la mejor solución.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Diseñar estrategias fiscales personalizadas</strong> para maximizar eficiencia y reducir la carga tributaria, aprovechando deducciones, bonificaciones y exenciones.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Garantizar el cumplimiento estricto</strong> de toda la normativa vigente, evitando errores, sanciones y recargos.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Mantenerte informado</strong> sobre cambios legislativos y oportunidades de optimización para tomar decisiones a tiempo.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Planificar tu futuro fiscal</strong>, tanto a nivel personal como empresarial, priorizando decisiones estratégicas a largo plazo.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Gestión ágil de trámites</strong>, declaraciones y liquidaciones, cumpliendo plazos sin demoras innecesarias.
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Servicio basado en la confianza</strong>, confidencialidad y una comunicación clara y transparente.
                  </div>
                </li>
              </ul>
              
              <div className="px-4">
                <a href="#contacto">
                  <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Hablemos
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={objectivesImage} 
                alt="Nuestros objetivos" 
                className="w-full rounded-xl sm:rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios de asesoría laboral
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Cuál es el coste de los servicios de asesoría laboral?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  El coste varía según las necesidades específicas de tu empresa o situación personal. Ofrecemos planes personalizados y adaptados a las características de cada cliente, con tarifas claras y transparentes. Contáctanos para recibir un presupuesto sin compromiso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Qué hacer si tengo un conflicto laboral con mi empleador o empleado?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Analizamos tu caso, proponemos vías de solución extrajudicial y, si procede, te representamos en procedimientos ante la autoridad laboral o tribunales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Cómo gestionar las bajas laborales por enfermedad o maternidad?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Te guiamos en los procedimientos y documentación ante la Seguridad Social y mutuas, asegurando el cumplimiento de plazos y requisitos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Puedo despedir a un empleado sin riesgo legal?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Estudiamos la causa y tramitación para minimizar riesgos, cumpliendo con los requisitos legales y documentales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Cuáles son los derechos laborales más importantes que debo conocer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Jornada, salario, vacaciones, permisos, prevención de riesgos, igualdad y no discriminación. Revisamos tu situación concreta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Qué debo hacer si mi empresa recibe una inspección laboral?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Te asistimos durante la inspección, revisamos documentación y actuamos como representación para defender tus intereses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Qué tipos de contratos laborales existen en España?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Indefinidos, temporales, formativos y fijos-discontinuos, entre otros. Te asesoramos sobre el tipo más adecuado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Qué beneficios tiene contar con un asesor laboral?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Seguridad jurídica, optimización de costes, prevención de sanciones y ahorro de tiempo en trámites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Cómo puedo contratar los servicios de asesoría laboral?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Contáctanos por teléfono o email, o agenda una cita desde el formulario. Te enviaremos una propuesta a medida.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Responsive */}
      <section id="contacto" className="py-12 sm:py-20 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
                  Contacto
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Atención al cliente: Lunes a jueves de 10:00 a 19:00 h. Viernes de 10:00 a 14:00 h.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <a 
                      href="https://maps.google.com/?q=Pl.+del+Turía+4+Local+2+posterior+28934+Móstoles+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:underline text-sm"
                    >
                      Pl. del Turía, 4 - Local 2, posterior, 28934 Móstoles, Madrid
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <a 
                      href="tel:+34919036814"
                      className="text-gray-900 hover:underline text-sm"
                    >
                      91 903 68 14
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <a 
                      href="mailto:info@asesoriaydefensaglobal.com"
                      className="text-gray-900 hover:underline text-sm"
                    >
                      info@asesoriaydefensaglobal.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[300px] sm:h-[380px] overflow-hidden rounded-2xl">
                <img 
                  src={contactImage} 
                  alt="Oficina CUSTODEX" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            {/* Right Side - Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl mb-2 text-gray-900">
                  Agenda tu cita
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Cuéntanos en qué podemos ayudarte y nos pondremos en contacto.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Nombre y apellidos
                    </label>
                    <Input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        name="telefono"
                        placeholder="+34 600 000 000"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Servicio de interés
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.servicio}>
                      <SelectTrigger className="w-full border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]">
                        <SelectValue placeholder="Asesoría Fiscal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fiscal">Asesoría Fiscal</SelectItem>
                        <SelectItem value="laboral">Asesoría Laboral</SelectItem>
                        <SelectItem value="juridica">Asesoría Jurídica</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Mensaje
                    </label>
                    <Textarea
                      name="mensaje"
                      placeholder="Cuéntanos brevemente tu caso"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full resize-none border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#1E293B] hover:bg-[#0F172A] text-white py-6 rounded-lg transition-colors"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar solicitud
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-8 sm:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-[#1a1d3a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-2">
                  ¿Listo para impulsar tus proyectos?
                </h2>
                <p className="text-white/80 text-sm">
                  Obtén una asesoría personalizada con nuestro equipo en Madrid.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href="tel:+34919036814" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 border-0">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </Button>
                </a>
                <a href="#contacto" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Escribir
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <motion.footer 
        className="py-6 sm:py-8 px-4 bg-white border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <img src={logoIcon} alt="CUSTODEX" className="w-8 h-8 sm:w-10 sm:h-10" loading="lazy" />
              <div>
                <div className="text-gray-900 font-semibold text-sm sm:text-base">ASESORIAYDEFENSAGLOBAL.COM</div>
                <div className="text-gray-600 text-xs">© Asesoría y Defensa Global</div>
              </div>
            </a>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
              <button 
                onClick={() => setShowTerminos(true)} 
                className="hover:text-blue-600 transition-colors"
              >
                Términos y Condiciones
              </button>
              <button 
                onClick={() => setShowPrivacidad(true)} 
                className="hover:text-blue-600 transition-colors"
              >
                Política de privacidad
              </button>
              <button 
                onClick={() => setShowCookies(true)} 
                className="hover:text-blue-600 transition-colors"
              >
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </motion.footer>
      </div>
      
      {/* Cookie Banner */}
      <CookieBanner 
        onOpenTerminos={() => setShowTerminos(true)}
        onOpenCookies={() => setShowCookies(true)}
      />
      
      {/* Modals */}
      {showTerminos && <TerminosCondiciones onClose={() => setShowTerminos(false)} />}
      {showPrivacidad && <PoliticaPrivacidad onClose={() => setShowPrivacidad(false)} />}
      {showCookies && <PoliticaCookies onClose={() => setShowCookies(false)} />}
    </>
  );
}
