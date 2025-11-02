# Assets Guide - Imágenes, Videos y GIFs

## 📂 Estructura de carpetas

```
public/
├── images/          # Imágenes generales
├── videos/          # Videos MP4, WebM, etc.
├── logos/           # Logos de clientes, partners, etc.
└── downloads/       # PDFs, templates para descargar
```

## 🖼️ Cómo agregar imágenes

### Paso 1: Colocar la imagen en la carpeta `public/`

Ejemplo:
- `public/images/hero-background.jpg`
- `public/logos/microsoft-logo.png`
- `public/images/case-study-retail.jpg`

### Paso 2: Referenciarla en el código

Las imágenes en `public/` se referencian desde la raíz `/`

**Ejemplo con Next.js Image (recomendado - optimizado):**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero-background.jpg"
  alt="Descripción de la imagen"
  width={1200}
  height={600}
  priority // para imágenes above the fold
/>
```

**Ejemplo con HTML img tag (simple):**
```tsx
<img
  src="/images/hero-background.jpg"
  alt="Descripción de la imagen"
  className="w-full h-auto"
/>
```

## 🎬 Cómo agregar videos

### Video de fondo (background):
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Video con controles:
```tsx
<video
  controls
  className="w-full rounded-lg"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
  Tu navegador no soporta video.
</video>
```

### Video de YouTube (embed):
```tsx
<iframe
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

## 🎞️ Cómo agregar GIFs

Los GIFs se tratan como imágenes normales:

```tsx
<img
  src="/images/animation.gif"
  alt="Animación"
  className="w-full h-auto"
/>
```

## 🌐 Usar imágenes externas (CDN, URLs)

```tsx
import Image from 'next/image';

<Image
  src="https://ejemplo.com/imagen.jpg"
  alt="Imagen externa"
  width={800}
  height={600}
  // Necesitas configurar dominios permitidos en next.config.ts
/>
```

## 💡 Mejores prácticas

1. **Optimiza el tamaño** antes de subir (usa herramientas como TinyPNG, Squoosh)
2. **Usa formatos modernos**: WebP para imágenes, WebM para videos
3. **Nombres descriptivos**: `case-study-retail.jpg` en vez de `img1.jpg`
4. **Usa Next.js Image** cuando sea posible para optimización automática
5. **Agrega alt text** descriptivos para SEO y accesibilidad
6. **Videos**: Usa MP4 para compatibilidad máxima

## 📏 Tamaños recomendados

- **Hero images**: 1920x1080px
- **Case study images**: 1200x800px
- **Logos**: 400x400px (PNG con fondo transparente)
- **Thumbnails**: 600x400px
- **Icons**: 64x64px o SVG

## 🎨 Formatos recomendados

- **Fotos**: JPG o WebP
- **Logos/Iconos**: PNG o SVG
- **Animaciones simples**: GIF o SVG animado
- **Videos**: MP4 (H.264) + WebM (fallback)
