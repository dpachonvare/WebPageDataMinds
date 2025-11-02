import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir imágenes de dominios externos (opcional)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
    // Formatos de imagen optimizados
    formats: ['image/webp'],
  },
};

export default nextConfig;
