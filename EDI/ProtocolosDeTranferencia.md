# Protocolos de comunicacion
Existen varios protocolos de comunicación utilizados para enviar mensajes EDI (Intercambio Electrónico de Datos) de una empresa a otra. Algunos de los más comunes son:

#### AS2 (Applicability Statement 2): 
es un protocolo de transferencia de datos seguro y confiable que utiliza la infraestructura de Internet para enviar mensajes EDI. Utiliza criptografía para garantizar la seguridad de los mensajes enviados, y requiere que ambos extremos de la comunicación se autentiquen mutuamente antes de enviar o recibir mensajes.
AS2 es un protocolo de transferencia de datos utilizado para el intercambio seguro y confiable de información empresarial, como facturas electrónicas, órdenes de compra y otros documentos comerciales.

AS2 utiliza el protocolo de transferencia de hipertexto (HTTP) y el protocolo de seguridad de capa de transporte (TLS) para encriptar y autenticar los datos en tránsito. La transferencia de datos se realiza mediante el intercambio de mensajes EDI (Electronic Data Interchange) en formato estándar.

AS2 es utilizado por muchas empresas en todo el mundo para automatizar y estandarizar sus procesos de intercambio de datos comerciales, lo que ayuda a reducir los errores y los costos asociados con el procesamiento manual de los datos. Además, AS2 cumple con las regulaciones de seguridad y privacidad, lo que lo convierte en una opción segura para el intercambio de datos comerciales confidenciales.

## AS2 Como funciona
El protocolo AS2 funciona mediante el intercambio de mensajes EDI (Electronic Data Interchange) entre dos socios comerciales. El proceso de intercambio de datos en AS2 es el siguiente:

Autenticación: Los socios comerciales se autentican mutuamente utilizando certificados digitales. Esto garantiza que los mensajes se envíen y reciban solo entre las partes autorizadas.

Encriptación: Los datos se encriptan utilizando el protocolo de seguridad de capa de transporte (TLS) antes de ser enviados a través de la red. Esto protege los datos de cualquier intento de interceptación o manipulación.

Compresión: Los datos se comprimen para reducir el tamaño del archivo y minimizar el tiempo de transferencia.

Envío del mensaje: El mensaje se envía utilizando el protocolo de transferencia de hipertexto (HTTP) a través de Internet.

Recepción y desencriptación: El receptor recibe el mensaje y utiliza su certificado digital para desencriptar los datos y verificar la autenticidad del remitente.

Validación: Los datos recibidos se validan para asegurarse de que cumplan con los requisitos del formato EDI y cualquier otra validación comercial.

Procesamiento: Una vez validados, los datos se procesan y se integran en los sistemas internos del receptor para su posterior procesamiento.

En resumen, AS2 permite el intercambio seguro y confiable de datos comerciales entre dos socios comerciales utilizando encriptación, autenticación y compresión para garantizar la integridad y la confidencialidad de los datos en tránsito.

## AS2 Configuracion
La configuración del protocolo AS2 puede variar según el software o la plataforma utilizada para implementar el intercambio de datos. En general, los siguientes son los pasos para configurar AS2:

Instalación del software AS2: Es necesario instalar el software AS2 en los sistemas del remitente y del receptor. Este software puede ser una solución de software de terceros o una solución integrada en el sistema existente.

Creación de un certificado digital: Cada parte debe crear su propio certificado digital para autenticar y cifrar los mensajes. Esto se puede hacer utilizando una Autoridad de Certificación (CA) de confianza o mediante la creación de un certificado autofirmado.

Configuración del perfil AS2: Se debe crear un perfil AS2 para el intercambio de datos, que incluye información como el nombre de la empresa, el número de identificación fiscal, los detalles de contacto, el certificado digital y los ajustes de seguridad.

Configuración del acuerdo comercial: Se debe establecer un acuerdo comercial que incluya los detalles del intercambio de datos, como los tipos de mensajes que se enviarán, los formatos de archivo, los horarios de envío, los ajustes de seguridad y la validación de datos.

Configuración del sistema de procesamiento: Los sistemas de procesamiento de cada parte deben ser configurados para procesar y validar los datos recibidos, incluyendo la validación de formato y cualquier otra validación comercial necesaria.

Pruebas y verificación: Es importante realizar pruebas y verificaciones para asegurarse de que la configuración es correcta y que el intercambio de datos funciona correctamente antes de realizar una producción en vivo.

En general, la configuración de AS2 implica la instalación y configuración del software, la creación de certificados digitales, la configuración de perfiles y acuerdos comerciales, y la configuración del sistema de procesamiento para procesar y validar los datos recibidos.


#### FTP (File Transfer Protocol): 
es un protocolo utilizado para transferir archivos entre computadoras a través de una red. Aunque es un protocolo comúnmente utilizado para transferir archivos en general, también se utiliza para enviar archivos EDI.

#### SFTP (Secure File Transfer Protocol): 
es un protocolo de transferencia de archivos que utiliza SSH (Secure Shell) para proporcionar seguridad y autenticación en la transferencia de archivos. Es similar a FTP, pero utiliza cifrado para garantizar la seguridad de los mensajes enviados.

#### HTTP (Hypertext Transfer Protocol): 
es el protocolo utilizado para transferir información en la web. También se puede utilizar para enviar mensajes EDI, aunque es menos común que los protocolos anteriores. Es importante tener en cuenta que HTTP no proporciona cifrado ni autenticación en sí mismo, por lo que se deben utilizar medidas adicionales para garantizar la seguridad de los mensajes enviados.