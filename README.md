
# Instrucciones de Configuración y Ejecución del Proyecto

![](https://github.com/diegobermudez09/Entregable/blob/main/Sistema.png)

https://github.com/diegobermudez09/Entregable/blob/main/pruebaEntrada.mp4
## Para presentar y ejecutar el proyecto, sigue estos pasos de manera clara y organizada:

###  Clonar el Repositorio desde GitHub

- Abre Visual Studio 2022.
- En la ventana de inicio, selecciona "Clonar un repositorio".
- Ingresa la URL del repositorio: https://github.com/diegobermudez09/Entregable.git.
- Selecciona una ubicación en tu sistema donde se clonará el proyecto y haz clic en "Clonar".

###  Configurar la Base de Datos

- Navega a la carpeta donde se clonó el proyecto.
- Encuentra el archivo "pruebaEntrada" que contiene el código SQL de la base de datos.
- Abre SQL Server Management Studio (SSMS).
- Conéctate a tu instancia de SQL Server.
- Abre una nueva consulta.
- Ejecuta la siguiente línea primero: `CREATE DATABASE pruebaEntrada;`
- Luego copia y pega el resto del código SQL del archivo "pruebaEntrada" en la nueva consulta.
- Ejecuta la consulta para tener la base de datos completa

###   Compilar y Ejecutar el Proyecto

- Vuelve a Visual Studio 2022.
- Asegúrate de que el proyecto está seleccionado en el Explorador de Soluciones.
- Haz clic en la flecha de iniciar, selecciona "Configurar proyectos de inicio" y habilita "Proyecto de inicio único" para Entregable.Server.
- Haz clic en "Compilar" o presiona Ctrl + Shift + B para compilar el proyecto.
- El compilado se mostrará como HTTP y se abrirá una página en tu navegador en la dirección: http://localhost:[puerto]/swagger/index.html.

###   Acceder a las Funcionalidades del CRUD

- Copia el enlace http://localhost:[puerto] (sin incluir /swagger/index.html).
- Pega el enlace en la barra de direcciones de tu navegador y presiona Enter.
- Al hacer esto, puede que te aparezca un mensaje indicando que la conexión no es privada, porque está compilando en HTTP.
- Haz clic en "Avanzado" y selecciona "Continuar a localhost".
- Esperamos unos segundos y deberías ver la página con las funcionalidades del CRUD.
