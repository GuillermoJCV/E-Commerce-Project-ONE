### PROYECTO LEAFY SHOP E-COMMERCE

Este es un proyecto hecho por personas que están estudiando en Alura y algunos otros que quisieron participar en su creación, sin embargo, cualquiera puede aportar al proyecto
A todos los que participen se les dará crédito, es un proyecto sin ánimo de lucro.

##Reglas:

Especialmente para llevar el orden, no se pueden modificar los archivos que son de uso general
- Archivos en la carpeta de utils
- El archivo **main.jsx**, ya que es el punto de entrada de la aplicación y el archivo
- El archivo **root.css**, porque se trata de las variables de css para mantener un mismo estilo y paleta de colores (De necesitar una nueva variable pueden solicitarlo para poder actualizar el archivo o recibir consejos de cómo generar un nuevo color a partir de una variable)
- Los archivos que se encuentran enla carpeta **tests**
- Se pueden guardar imagenes en **assets** pero nunca borrar (Estas imagenes tienen que pasar por un compresor de imagenes como `https://tinyjpg.com/`)

Para comenzar a codificar primero deben de tomar una tarea en nuestro proyecto de Jira y luego empezar para no interferir con el trabajo de otros.

Para los commits deben ser muy especificos con los cambios que hicieron. Entre más especificos sean mejor, por ejemplo:

- Debe empezar siempre con un verbo en imperativo, sea el commit en inglés o español
- En caso de que agreguen un componente al proyecto deben especificar qué hace el componente o para qué sirve
`git commit -m "Agrega un formulario"` ❌
`git commit -m "Agrega un formulario de login que se activa cuando el usuario toca el botón de ingresar en el componente Header.jsx"`  ✅

- Para hacer el push de los datos primero tienen que pasarse a una branch propia de la siguiente manera:
`git branch nombre_propio` Para crear la rama
`git checkout nombre_propio` Para pasarse a esta rama

`git add file` Para agregar un archivo
`git commit -m "Agrega algo genérico"` Para hacer el **commit** en tu rama
`git push origin nombre_propio` Para subir tu rama de trabajo a este repositorio
