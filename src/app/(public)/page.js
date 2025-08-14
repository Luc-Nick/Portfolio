import Image from "next/image";
import CardTest from "./CardTest";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Navbar */}
      {/* Hero Section: Hero → CTA: “Ver proyectos” / “Contactarme” (CTA es call to action) */}
      {/* About Me (mini) + Tech stack (iconitos) y podria ver un link a un About Extendido con Bio extendida, certificaciones*/}
      {/* Proyectos Destacados : destacados (3–6) */}
      {/* Contacto form*/} 
      {/* Footer */} 
      <div className="text-center mt-10"></div>
      <CardTest />
    </div>
  );
}
