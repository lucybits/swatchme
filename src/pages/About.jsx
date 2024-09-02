const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-4 sm:mb-6">
          Sobre el sitio
        </h1>

        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-md">
          <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
            Les cuento, que este es un proyecto personal que desarrollé para el
            público en general Empecé a construirlo para poner en práctica lo
            que aprendí con React, VITE y TailwindCSS y librerías adicionales, y
            la idea principal es darte una herramienta para crear paletas de
            colores. No estoy buscando ganar dinero con esto, solo divertirme y
            poner a práctica lo que he aprendido.
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
            Estamos en la versión 0.0.1, ¡así que esto es solo el comienzo! Mi
            plan es seguir mejorando SwatchMe, agregar nuevas funciones y, en
            general, hacer que sea aún más genial con el tiempo. Tu opinión
            cuenta, así que no dudes en decirme qué te gustaría ver en el
            futuro. Vamos...
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Solo para que lo sepas, SwatchMe está hospedado en Netlify, lo que
            significa que hay algunas cosas fuera de mi control. Aunque hago
            todo lo posible por mantener el sitio funcionando a la perfección,
            las políticas y condiciones de Netlify son cosa de ellos. Así que,
            si tienes alguna pregunta sobre cómo funcionan las cosas o cómo
            podría afectar la disponibilidad del sitio, te sugiero que consultes
            las políticas de Netlify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
