import React from 'react';

// Importa los componentes de layout y secciones
import Header from './components/layout/Header';
import Footer from './components/layout/footer/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/features/Features';
import Connectivity from './components/sections/connectivity/Connectivity';
import CustomCursor from './components/ui/CustomCursor';
import FeedbackSection from './components/sections/Feedback';
import VisionSection from './components/sections/vision/Vision';

// Componente principal que ensambla la página
export default function App() {
    const videos = [
        "https://huxctusdagyyoqjxfuzn.supabase.co/storage/v1/object/sign/videos/video1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjRjOTQ5MS02ZDExLTQwMWEtOGVjZS0zNmY5N2VlYzZiMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW8xLm1wNCIsImlhdCI6MTc0OTY3OTU4MiwiZXhwIjoxOTA3MzU5NTgyfQ.oFTbuI1ds5pgHXy6G6GYx5fl_NwjaXjxqvOcuSWVMLw",
        "https://huxctusdagyyoqjxfuzn.supabase.co/storage/v1/object/sign/videos/video2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjRjOTQ5MS02ZDExLTQwMWEtOGVjZS0zNmY5N2VlYzZiMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW8yLm1wNCIsImlhdCI6MTc0OTY4MDM2NSwiZXhwIjoxNzUwMTEyMzY1fQ.PFXvlFEJkBYrdusMkkqOoF9yF9CIxvKzOAmwuBr_w98",
        "https://huxctusdagyyoqjxfuzn.supabase.co/storage/v1/object/sign/videos/video3.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjRjOTQ5MS02ZDExLTQwMWEtOGVjZS0zNmY5N2VlYzZiMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW8zLm1wNCIsImlhdCI6MTc0OTY4MDU1MiwiZXhwIjoxNzUwMTEyNTUyfQ.ydJa8D_19qU-VuySHUDCszJPL8TSUhRF8DhOtpUkFpw",
        "https://huxctusdagyyoqjxfuzn.supabase.co/storage/v1/object/sign/videos/video4.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjRjOTQ5MS02ZDExLTQwMWEtOGVjZS0zNmY5N2VlYzZiMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW80Lm1wNCIsImlhdCI6MTc0OTY4MDc3NiwiZXhwIjoxNzUwMTEyNzc2fQ.BaLdK39vITPqlywRj2KLGGpKvjLv8qqk-a1Pd83hwlU"
    ];
    return (
        <div className="bg-black text-gray-300 font-sans leading-normal tracking-tight">
            {/* --- CURSOR PERSONALIZADO --- */}
            <CustomCursor />
            {/* --- NAVEGACIÓN --- */}
            <Header />

            {/* --- CONTENIDO PRINCIPAL --- */}
            <main>
                {/* CORREGIDO: Se pasa la prop 'appName' para que el título se muestre */}
                <Hero appName="Lerna" videos = {videos} />

                {/* El resto de las secciones se renderizan después del Hero */}
                <Features />
                <FeedbackSection/>
                <Connectivity />
                <VisionSection />
            </main>

            {/* --- FOOTER --- */}
            <Footer />
        </div>
    );
}
