# Task Manager - Frontend

Este es el frontend de la aplicación de gestión de tareas "Task Manager" creado por Erick Aranibar como parte de la prueba técnica para desarrollador full stack en Coally. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas de forma intuitiva. El frontend está construido con **React.js** y utiliza **Tailwind CSS** para el diseño y **Redux** para manejar el estado global.

## Enlace a la aplicación desplegada

La aplicación desplegada está disponible en:  
[**Enlace a la aplicación desplegada**](https://coally-prueba-tecnica-frontend-rkd6.vercel.app/)

## Instalación y ejecución local

Para ejecutar este proyecto localmente, sigue estos pasos:

### 1. Clonar el repositorio
```
git clone https://github.com/ErAranibar/CoallyPruebaTecnicaFrontend
```

### 2. Navegar a la carpeta del proyecto
```
cd CoallyPruebaTecnicaFrontend
```

### 3. Instalar las dependencias
```
npm install
```

### 4. Crear el archivo `.env.local`
Crea un archivo `.env.local` en la raíz del proyecto y agrega las siguientes variables de entorno:

```env
API_URL=https://coallypruebatecnicabackend.onrender.com/
```

### 5. Ejecutar el proyecto localmente
```
npm run dev
```

El proyecto estará corriendo en [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Autenticación**: Muestra pantallas de registro e inicio de sesión. Se puede utilizar cualquier correo, no hay validaciones con envíos automáticos. Después de registrarse pide volver a iniciar sesión. La sesión dura 5 minutos antes de expirar.
- **Pantalla principal**: Muestra la lista de tareas con título, estado (completada o pendiente) y fecha de creación.
- **Formulario para agregar tareas**: Permite agregar nuevas tareas a la lista.
- **Editar y eliminar tareas**: Puedes editar o eliminar tareas directamente desde la lista.
- **Marcar como completada o pendiente**: Función para cambiar el estado de las tareas.
- **Filtro de tareas**: Permite filtrar las tareas por estado (completadas, pendientes o todas).
- **Diseño responsivo**: Optimizado para dispositivos de escritorio y móviles.

## Despliegue

Este proyecto se despliega automáticamente en **Vercel**. Para conectarlo con tu cuenta de Vercel:

1. Conecta tu repositorio de GitHub a Vercel.
2. Vercel detectará automáticamente que es un proyecto de Next.js y lo desplegará.
3. Configurar las variables de entorno para apuntar al proyecto de backend.
4. Cada vez que hagas un push a la rama principal, Vercel desplegará automáticamente la última versión.

## Tecnologías usadas

- React.js: Librería principal para la construcción de la UI.
- Redux Toolkit: Para manejar el estado global de la aplicación.
- Axios: Para las peticiones HTTP al backend.
- Tailwind CSS: Framework de CSS para un diseño responsivo y elegante.
- Next.js: Framework de React para renderizado del lado del servidor y optimización automática.
- Vercel: Plataforma para el despliegue del frontend.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.