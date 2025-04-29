import React from 'react';

const About = () => {
  return (
                // Sección informativa sobre EXF
<section className="py-20 bg-gray-100">
    <div className="container px-4 mx-auto text-center">
         <h2 className="mb-6 text-4xl font-bold text-gray-800">¿Quiénes somos?</h2>
            <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed text-gray-700">
                <strong>Elite Xtreme Fighting (EXF)</strong> es una promotora de <strong>MMA profesional y amateur</strong> con base en <strong>Ensenada, Baja California</strong>, dedicada a impulsar el talento local y nacional desde hace más de <strong>10 años</strong>.
                Hemos organizado más de <strong>20 eventos</strong> de alto nivel, brindando una plataforma seria y profesional para peleadores emergentes y consolidados.
            </p>

        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
             <h3 className="mb-3 text-xl font-bold text-gray-800">Eventos de impacto</h3>
             <p className="text-gray-700">
                 Desde nuestro primer evento en 2013 hasta la actualidad, hemos sido el escenario de batallas memorables que han marcado la historia del MMA en la región. Cada evento cuenta con producción profesional, jueces certificados y transmisiones en vivo.
             </p>
              </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="mb-3 text-xl font-bold text-gray-800">Semillero de talentos</h3>
        <p className="text-gray-700">
            EXF ha sido la cuna de peleadores que hoy compiten en organizaciones como{" "}
            <a
            href="https://www.combateglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            Combate Global
            </a>
            ,{" "}
            <a
            href="https://uwc.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            UWC
            </a>
            ,{" "}
            <a
            href="https://www.bellator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            Bellator
            </a>
            ,{" "}
            <a
            href="https://www.bravecf.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            Brave
            </a>{" "}
            e incluso{" "}
            <a
            href="https://www.ufcespanol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            UFC
            </a>
            . Muchos de ellos iniciaron su carrera en nuestra jaula y ahora representan a México en escenarios internacionales.
            </p>
            </div>


                <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-gray-800">Compromiso con el crecimiento</h3>
                <p className="text-gray-700">
                    Nuestro enfoque está en ofrecer una plataforma justa, segura y profesional para el desarrollo de peleadores. Nos dedicamos a elevar el nivel del deporte en Baja California y más allá, promoviendo valores como la disciplina, el respeto y el honor.
                </p>
                </div>
            </div>

            <p className="mt-12 text-gray-600 text-md">
                Si estás listo para formar parte del futuro del MMA o quieres conocer más sobre nuestros próximos eventos, contáctanos o síguenos en redes sociales.
            </p>
            </div>
</section>
   
  );
};

export default About;

