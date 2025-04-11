# Aplicación de Gestión de Productos (Arquitectura en Capas)

Esta aplicación simple permite agregar y listar productos, organizada en tres capas distintas para una mejor separación de responsabilidades.

## Identificación de las Capas en el Código:

1.  **Capa de Presentación (`presentacion.js`):**
    * **Responsabilidad:** Esta capa se encarga de la interacción con el usuario. Define cómo se muestra la información y cómo se reciben las entradas del usuario.
    * **Identificación:** En nuestro código, la capa de presentación se identifica por las funciones que muestran menús (`mostrarMenu`) y solicitan información al usuario (`readlineSync.question`, `readlineSync.questionFloat`). No contiene lógica de negocio directa ni manipula directamente los datos. Su principal función es hacer las acciones del usuario llamando a la capa de lógica de negocio.

2.  **Capa de Lógica de Negocio (`negocio.js`):**
    * **Responsabilidad:** Esta capa contiene las reglas y la lógica principal de la aplicación. Recibe las solicitudes de la capa de presentación, realiza las operaciones necesarias (como crear un nuevo producto con un ID), y delega la manipulación de los datos a la capa de acceso a datos.
    * **Identificación:** Se identifica por las funciones que implementan la funcionalidad principal de la aplicación (`agregarProducto`, `listarProductos`). Estas funciones no saben cómo se presentan los datos al usuario ni cómo se almacenan; simplemente definen el *qué* se hace.

3.  **Capa de Acceso a Datos (`datos.js`):**
    * **Responsabilidad:** Esta capa es responsable de la persistencia y recuperación de los datos. En este caso simple, los datos se almacenan en memoria, pero en una aplicación real, esta capa interactuaría con una base de datos, archivos, o cualquier otro sistema de almacenamiento.
    * **Identificación:** Se identifica por las funciones que directamente interactúan con la fuente de datos (`productos`, `agregarProductoADatos`, `obtenerProductosDeDatos`). No contiene lógica de negocio ni sabe cómo se presenta la información al usuario. Su única preocupación es la gestión de los datos.

## Ventajas Observadas Respecto a la Versión Monolítica:

Al refactorizar la aplicación en capas, observamos las siguientes ventajas en comparación con la versión monolítica:

* **Mejor Organización y Mantenibilidad:** El código está ahora mejor organizado en archivos separados según su responsabilidad. Esto facilita la comprensión, búsqueda y modificación del código. Si necesitamos cambiar la forma en que se almacenan los datos, solo necesitamos modificar la capa de acceso a datos sin afectar la lógica de negocio o la presentación.
* **Mayor Separación de Responsabilidades:** Cada capa tiene una responsabilidad clara y definida. Esto reduce el acoplamiento entre las diferentes partes de la aplicación. Los cambios en una capa tienen menos probabilidades de afectar a otras capas.
* **Mayor Reusabilidad:** En aplicaciones más complejas, la capa de lógica de negocio podría ser reutilizada por diferentes interfaces de usuario (por ejemplo, una interfaz web y una aplicación de línea de comandos). La capa de acceso a datos podría ser reemplazada para utilizar una base de datos diferente sin cambiar la lógica de negocio.
* **Facilita el Desarrollo en Equipo:** Diferentes desarrolladores pueden trabajar en diferentes capas simultáneamente con menos riesgo de conflictos, ya que cada capa tiene un enfoque específico.
* **Mejor Escalabilidad y Mantenimiento a Largo Plazo:** A medida que la aplicación crece, esta estructura modular facilita la escalabilidad y el mantenimiento. Se pueden realizar cambios y actualizaciones en una capa sin necesidad de entender o modificar toda la base de código.

En resumen, la arquitectura en capas proporciona una estructura más robusta y flexible para el desarrollo de software, especialmente a medida que la complejidad de la aplicación aumenta.