'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

interface Product {
  id: string
  name: string
  price: string
  description: string
  category: string
  image: string
  isSpecial?: boolean
}

export default function DeliarepaPremiumApp() {
  const [activeTab, setActiveTab] = useState('featured')
  const [isLoaded, setIsLoaded] = useState(false)
 const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredProducts: Product[] = [
    {
      id: 'ejecutiva',
      name: 'Arepa de Yuca libre de gluten',
      price: '$7,000',
      description: 'Arepas de yuca con queso, hechas naturalmente de yuca libre de gluten, rica en fibra fuente de energía y brinda mayor sensación de saciedad.',
      category: 'Premium',
      image: '/YUCAA.png',
      isSpecial: false
    },
    {
      id: 'platano',
      name: 'Arepa de Plátano Maduro',
      price: '$7,000',
      description: 'Arepas hechas naturalmente de plátano maduro con queso, brindan saciedad y ayudan al transito intestinal. Son una deliciosa variación de la arepa tradicional con un toque de dulce que proviene del plátano maduro.',
      category: 'Premium',
      image: '/MADURO.png',
      isSpecial: false
    },
    {
      id: 'nutritiva',
      name: 'Arepa Nutritiva con linaza y chía',
      price: '$7,000',
      description: 'las arepas de maíz peto con semillas de linaza y chía son naturalmente  una versión saludable y nutritiva de nuestra arepa, ya que las semillas de linaza y chía son ricas en ácidos grasos, omega 3, fibra y antioxidantes y al combinarse el resultado es una arepa más densa, rica en nutrientes y con un sabor único',
      category: 'Premium',
      image: '/SEMILLAS.png',
      isSpecial: false
    },
    {
      id: 'tradicional',
      name: 'Arepa Tradicional Santandereana',
      price: '$4,000',
      description: 'Deliciosa arepa de maíz pelado, se caracteriza por su sabor a maíz pronunciado y textura suave.',
      category: 'Premium',
      image: '/MAIZ PELADO 1.png',
    }
  ]

  const allProducts: Product[] = [
    ...featuredProducts,
    {
      id: 'carne',
      name: 'Arepa Gourmet de carne',
      price: '$9,000',
      description: 'La combinación de nuestra arepa con carne desmechada se convierte en una verdadera delicia, ideales para el desayuno o brunch, para cenar o degustar a la hora que desees.',
      category: 'Especial',
      image: '/CARNE 1.png'
    },
    {
      id: 'hawaiana',
      name: 'Arepa hawiana',
      price: '$9,000',
      description: 'Arepas precocidas rellenas con piña calada, jamón de cerdo y queso Mozzarella',
      category: 'Especial',
      image: '/HAWAIANA.png'
    },
    {
      id: 'jaomyqueso',
      name: 'Arepa jamon y queso',
      price: '$7,000',
      description: 'Arepa rellena con jamón y queso mozzarella que gratina y derrite. Ahorra tiempo con una comida completa. Te cuadra el desayuno, el antojito y la cena.',
      category: 'Tradicional',
      image: '/JAMON Y QUESO.png'
    },
       {
      id: 'pollo',
      name: 'Arepa pollo',
      price: '$7,000',
      description: 'arepa rellena de pollo, combina la suavidad de la arepa con un delicioso y generoso relleno de pechuga de pollo jugosa',
      category: 'Especial',
      image: '/SOLO POLLO.png'
    },
    {
      id: 'mixta',
      name: 'Arepa mixta de pollo y carne',
      price: '$9,000',
      description: 'nuestras arepas admiten muchísimos rellenos, la arepa mixta es una de nuestras favoritas, rellena de carne de res y pechuga de pollo desmechada, jamón y queso.',
      category: 'Especial',
      image: '/MIXTAA.png'
    },
     {
      id: 'queso',
      name: 'Arepa de queso',
      price: '$4,000',
      description: 'arepas rellenas de queso son crujientes y doradas por fuera, y por dentro tienen un relleno suave de queso derretido que las hace totalmente irresistibles.',
      category: 'Tradicional',
      image: '/QUESO.png'
    },
     {
      id: 'queso',
      name: 'Arepa de doble queso',
      price: '5,000',
      description: 'Las arepas doble queso son crujientes por fuera y suaves por dentro, con un relleno abundante de queso derretido que se extiende con cada mordisco.',
      category: 'Tradicional',
      image: '/DOBLE QUESO 2.png'
    }
  ]

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const openWhatsApp = (product?: Product) => {
    const phone = '573173450555'
    let message = 'Hola DELIAREPA 👋\n\n'
    
    if (product) {
      message += `Me interesa la ${product.name} (${product.price})\n\n`
    }
    
    message += 'Quisiera información sobre:\n' +
      '• Disponibilidad\n' +
      '• Tiempo de entrega\n' +
      '• Opciones de domicilio\n' +
      '• Métodos de pago\n\n' +
      'Gracias por su atención.'
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const openLocation = () => {
    window.open('https://maps.google.com/?q=6.2476,-75.5658', '_blank')
  }

  const callDirect = () => {
    window.open('tel:+573173450555', '_self')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/deliarepa_2001', '_blank')
  }

  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image
                src="/logo-deliarepa.png"
                alt="DELIAREPA"
                width={180}
                height={180}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
        
              />
            </div>
          </div>
          
          <h1 className={styles.brandTitle}>DELIAREPA</h1>
          <p className={styles.brandSubtitle}>Alimenta tu paladar</p>
          <p className={styles.brandDescription}>Tradición artesanal colombiana desde 2001</p>
          
          <div className={styles.businessMetrics}>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>500+</span>
              <span className={styles.metricLabel}>Clientes</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>4.9</span>
              <span className={styles.metricLabel}>Rating</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>10+</span>
              <span className={styles.metricLabel}>Variedades</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={styles.navigation}>
        <button 
          className={`${styles.navTab} ${activeTab === 'featured' ? styles.active : ''}`}
          onClick={() => setActiveTab('featured')}
        >
          Destacados
        </button>
        <button 
          className={`${styles.navTab} ${activeTab === 'menu' ? styles.active : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          Menú Completo
        </button>
        <button 
          className={`${styles.navTab} ${activeTab === 'contact' ? styles.active : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contacto
        </button>
      </nav>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {activeTab === 'featured' && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionHeader}>
              <h2>Nuestras Especialidades</h2>
              <p>Descubre los sabores que nos hacen únicos</p>
            </div>
            
            {/* Product Carousel */}
            <div className={styles.carouselContainer}>
              <button 
                className={`${styles.carouselButton} ${styles.prev}`}
                onClick={() => scrollCarousel('left')}
                aria-label="Anterior"
              >
                ←
              </button>
              
              <div className={styles.carousel} ref={carouselRef}>
                {featuredProducts.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productImage}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={280}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                      {product.isSpecial && (
                        <div className={styles.specialBadge}>Especial</div>
                      )}
                      
                    </div>
                    
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDescription}>{product.description}</p>
                      <div className={styles.productFooter}>
                        <span className={styles.productPrice}>{product.price}</span>
                        <button 
                          className={styles.orderButton}
                          onClick={() => openWhatsApp(product)}
                        >
                          Pedir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className={`${styles.carouselButton} ${styles.next}`}
                onClick={() => scrollCarousel('right')}
                aria-label="Siguiente"
              >
                →
              </button>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActions}> 
              <button className={styles.secondaryAction} onClick={() => setActiveTab('menu')}>
                Ver Menú Completo
              </button>
            </div>
          </section>
        )}

        {activeTab === 'menu' && (
          <section className={styles.menuSection}>
            <div className={styles.sectionHeader}>
              <h2>Menú Completo</h2>
              <p>Todas nuestras creaciones artesanales</p>
            </div>
            
            <div className={styles.menuGrid}>
              {allProducts.map((product) => (
                <div key={product.id} className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <div className={styles.menuItemInfo}>
                    <div className={styles.menuItemHeader}>
                      <h4>{product.name}</h4>
                      <span className={styles.menuItemPrice}>{product.price}</span>
                    </div>
                    <p className={styles.menuItemDescription}>{product.description}</p>
                    <div className={styles.menuItemFooter}>
                      <span className={styles.menuItemCategory}>{product.category}</span>
                      <button 
                        className={styles.menuOrderButton}
                        onClick={() => openWhatsApp(product)}
                      >
                        Pedir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className={styles.contactSection}>
            <div className={styles.sectionHeader}>
              <h2>Contáctanos</h2>
              <p>Estamos aquí para servirte</p>
            </div>
            
            <div className={styles.contactOptions}>
              <div className={styles.contactCard} onClick={() => openWhatsApp()}>
                <div className={styles.contactIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                  </svg>
                </div>
                <div className={styles.contactInfo}>
                  <h4>WhatsApp</h4>
                  <p>Pedidos y consultas directas</p>
                  <span className={styles.contactAction}>Enviar mensaje</span>
                </div>
              </div>
              
              <div className={styles.contactCard} onClick={callDirect}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactInfo}>
                  <h4>Teléfono</h4>
                  <p>+57 317 345 0555</p>
                  <span className={styles.contactAction}>Llamar ahora</span>
                </div>
              </div>
              
              <div className={styles.contactCard} onClick={openLocation}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactInfo}>
                  <h4>Ubicación</h4>
                  <p>Calle Principal #123, Centro</p>
                  <span className={styles.contactAction}>Ver en mapa</span>
                </div>
              </div>
              
              <div className={styles.contactCard} onClick={openInstagram}>
                <div className={styles.contactIcon}>📸</div>
                <div className={styles.contactInfo}>
                  <h4>Instagram</h4>
                  <p>@deliarepa_2001</p>
                  <span className={styles.contactAction}>Seguir</span>
                </div>
              </div>
            </div>
            
            <div className={styles.businessHours}>
              <h3>Horarios de Atención</h3>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursItem}>
                  <span>Lunes - Sábado</span>
                  <span>6:00 AM - 1:00 PM y 4:00 PM - 8:00 PM</span>
                </div>
                <div className={styles.hoursItem}>
                  <span>Domingos y festivos</span>
                  <span>8:00 AM - 12:00 M</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Floating Action Button */}
      <button className={styles.fab} onClick={() => openWhatsApp()}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
        </svg>
      </button>

      {/* Bottom Info */}
     <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Sección principal de marca */}
        <div className={styles.footerBrandSection}>
          <p className={styles.footerBrand}>DELIAREPA</p>
          <p className={styles.footerSubtitle}>Tradición y calidad artesanal</p>
        </div>

        {/* Características principales */}
        <div className={styles.footerFeatures}>
          <span className={styles.footerFeature}>🚚 Envíos Nacionales</span>
          <span className={styles.footerFeature}>💳 Todos los pagos</span>
          <span className={styles.footerFeature}>🌱 100% Natural</span>
        </div>
        {/* Horarios de atención */}
        <div className={styles.footerHours}>
          <p className={styles.hoursTitle}>Horarios de Atención</p>
          <div className={styles.hoursInfo}>
            <span>Lun - Sáb: 6:00 AM - 1:00 PM y 4:00 PM - 8:00 PM </span>
            <br />
            <span>Dom y festivos: 8:00 AM - 12:00 M</span>
          </div>
        </div>

        {/* Footer bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© 2025 DELIAREPA - Hecho con ❤️ en Colombia</p>
        </div>
      </div>
    </footer>
    </div>
  )
}