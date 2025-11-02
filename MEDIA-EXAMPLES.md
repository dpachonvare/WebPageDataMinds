# Ejemplos Prácticos - Agregar Imágenes/Videos

## 🎯 Ejemplos listos para usar

### Ejemplo 1: Hero con imagen de fondo

**Archivo**: `components/HeroSplit.tsx`

```tsx
export default function HeroSplit({ headline, subheadline, primaryCTA, secondaryCTA }: HeroSplitProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/hero-background.jpg"
          alt="Data analytics background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido encima de la imagen */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h1>
          {/* resto del contenido... */}
        </div>
      </div>
    </section>
  );
}
```

### Ejemplo 2: Logos de clientes/partners

**Archivo**: `components/LogoMarquee.tsx`

```tsx
export default function LogoMarquee() {
  const logos = [
    { name: 'Microsoft', src: '/logos/microsoft.png' },
    { name: 'Azure', src: '/logos/azure.png' },
    { name: 'Power BI', src: '/logos/powerbi.png' },
    { name: 'Fabric', src: '/logos/fabric.png' },
  ];

  return (
    <section className="bg-white py-8 border-y border-gray-200">
      <div className="section-container">
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-12 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Ejemplo 3: Case Study con imagen

**Archivo**: `app/case-studies/page.tsx` (agregar dentro del map de estudios)

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
  {/* Imagen del case study */}
  <div className="rounded-lg overflow-hidden">
    <img
      src="/images/case-study-retail.jpg"
      alt={study.client}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Contenido del case study */}
  <div>
    <h3 className="text-xl font-semibold text-navy-800 mb-4">
      Challenge
    </h3>
    {/* resto del contenido... */}
  </div>
</div>
```

### Ejemplo 4: Video demo en Resources

**Archivo**: `app/resources/page.tsx`

```tsx
{/* Agregar esta sección */}
<section className="py-16 bg-white">
  <div className="section-container">
    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
      Video Demo
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          poster="/images/video-thumbnail.jpg"
          className="w-full h-full"
        >
          <source src="/videos/fabric-demo.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </div>
    </div>
  </div>
</section>
```

### Ejemplo 5: GIF animado en About

**Archivo**: `app/about/page.tsx`

```tsx
<div className="card">
  <div className="flex items-center gap-4 mb-4">
    <img
      src="/images/process-animation.gif"
      alt="Proceso de trabajo animado"
      className="w-24 h-24"
    />
    <div>
      <h3 className="font-semibold text-navy-700 mb-2">Nuestro Proceso</h3>
      <p className="text-gray-700">
        Metodología ágil e iterativa
      </p>
    </div>
  </div>
</div>
```

### Ejemplo 6: Galería de imágenes

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <img
        src={`/images/project-${i}.jpg`}
        alt={`Proyecto ${i}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
```

### Ejemplo 7: Avatar del equipo

```tsx
<div className="flex items-center gap-4">
  <img
    src="/images/team/john-doe.jpg"
    alt="John Doe"
    className="w-16 h-16 rounded-full object-cover border-2 border-azure-500"
  />
  <div>
    <h4 className="font-semibold">John Doe</h4>
    <p className="text-sm text-gray-600">Senior Consultant</p>
  </div>
</div>
```

## 🚀 Cómo implementar

### Paso 1: Sube tus archivos

Coloca tus archivos en las carpetas correspondientes:
```
public/
├── images/
│   ├── hero-background.jpg
│   ├── case-study-retail.jpg
│   └── video-thumbnail.jpg
├── logos/
│   ├── microsoft.png
│   ├── azure.png
│   └── powerbi.png
└── videos/
    └── fabric-demo.mp4
```

### Paso 2: Dime qué quieres modificar

Ejemplo: "Quiero agregar una imagen de fondo en el Hero"

### Paso 3: Yo modifico el código

Edito el componente correspondiente y hago commit/push.

### Paso 4: Vercel redespliega automáticamente

En 1-2 minutos verás los cambios en tu sitio.

## 📝 Plantilla para pedirme cambios

**"Quiero agregar [imagen/video/gif] en [ubicación]"**

Ejemplos:
- "Quiero agregar el logo de Microsoft en el LogoMarquee"
- "Quiero poner una imagen de fondo en el Hero"
- "Quiero agregar un video demo en la página de Resources"
- "Quiero poner fotos del equipo en la página About"

¡Solo dime y lo implemento! 🎨
