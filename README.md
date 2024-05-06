# Guía para desplegar aplicación

## Archivo .env

Es necesario configurar un archivo .env, con las configuraciones del proyecto del backend. Esto permite utilizar los servicios y conectarse a MySQL. En el parámetro DB_PASSWORD debe ir la password del root de MySQL.

```
# Server configuration
PORT=4000

# Local database
DB_HOST = "127.0.0.1"
DB_USER="root"
DB_PASSWORD=""
DB_NAME="patient_registration"

# Docker database
DOCKER_DB_HOST="mysql"

# Mailtrap configuration
MAILTRAP_HOST="sandbox.smtp.mailtrap.io"
MAILTRAP_PORT=2525
MAILTRAP_USER="1759ddf237c54e"
MAILTRAP_PASSWORD="e208d055fb679b"

# Cloudinary configuration
CLOUDINARY_CLOUD_NAME="dxwag8d7a"
CLOUDINARY_API_KEY="514396279635553"
CLOUDINARY_API_SECRET="x6BSh44sPu9aZZNOTiqnfjUP8Nc"
```

## Migrations

Dentro de la carpeta migrations hay dos archivos .sql que permiten crear la base de datos y la tabla de patients. Uno de los archivos tiene un insert con dos registros de prueba.

Se utilizó como ORM Sequelize, que, entre otras cosas, permite hacer migraciones y sincronizar la base de datos automáticamente también (npm run migrate). Si se quiere hacer de esta manera, se debe configurar también el archivo ./backend/config/config.json con la password de MySQL.
