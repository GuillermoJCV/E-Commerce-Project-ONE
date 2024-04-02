import React, { useState } from 'react';

function useWindowWidth() {
  // Estado para almacenar el ancho de la ventana
  const [width, setWidth] = useState(window.innerWidth);

  // Efecto que se ejecuta cuando el componente se monta
  React.useLayoutEffect(() => {
    // Función para actualizar el estado con el ancho actual de la ventana
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Agregar event listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      // Eliminar el event listener para evitar pérdidas de memoria
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array vacío como segundo argumento para ejecutar el efecto solo una vez

  // Retornar el ancho de la ventana actual
  return width;
}

export default useWindowWidth;
