
# Instrucciones de Configuración y Ejecución del Proyecto

![](https://github.com/diegobermudez09/Entregable/blob/main/Sistema.png)

## Para presentar y ejecutar el proyecto, sigue estos pasos de manera clara y organizada:

###  Clonar el Repositorio desde GitHub

- Abre Visual Studio 2022.
- En la ventana de inicio, selecciona "Clonar un repositorio".
- Ingresa la URL del repositorio: https://github.com/diegobermudez09/Entregable.git.
- Selecciona una ubicación en tu sistema donde se clonará el proyecto y haz clic en "Clonar".

###  Configurar la Base de Datos

- Navega a la carpeta donde se clonó el proyecto.
- Encuentra el archivo .txt que contiene el código SQL de la base de datos.
- Abre SQL Server Management Studio (SSMS).
- Conéctate a tu instancia de SQL Server.
- Abre una nueva consulta.
- Copia y pega todo el código SQL del archivo .txt en la nueva consulta.
- Ejecuta la consulta para crear la base de datos.

###   Compilar y Ejecutar el Proyecto

- Vuelve a Visual Studio 2022.
- Asegúrate de que el proyecto está seleccionado en el Explorador de Soluciones.
- Haz clic en "Compilar" o presiona Ctrl + Shift + B para compilar el proyecto.
- Una vez compilado, haz clic en "Iniciar" o presiona F5 para ejecutar el proyecto.
- Se abrirá una página en tu navegador en la dirección: http://localhost:5070/swagger/index.html.

###   Acceder a las Funcionalidades del CRUD

- Copia el enlace http://localhost:5070 (sin incluir /swagger/index.html).
- Pega el enlace en la barra de direcciones de tu navegador y presiona Enter.
- Deberías ver la página con las funcionalidades del CRUD.
