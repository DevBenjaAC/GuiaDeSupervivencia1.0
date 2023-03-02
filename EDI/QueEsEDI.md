## EDI 
EDI (Electronic Data Interchange) es una tecnología que permite la transmisión de información 
estructurada entre diferentes sistemas informáticos sin la necesidad de intervención humana.
Se utiliza principalmente para la transmisión de documentos comerciales, como órdenes de compra,
facturas y avisos de envío, entre empresas y organizaciones. El objetivo de EDI es simplificar y
automatizar los procesos de negocio, reducir errores y tiempos de procesamiento, y 
mejorar la eficiencia y la colaboración entre las empresas. EDI se ha utilizado desde la 
década de 1970 y ha evolucionado a lo largo del tiempo para adaptarse a las necesidades de las
empresas modernas.

Pasos básicos involucrados en el proceso de EDI:

Identificar los documentos comerciales que se intercambiarán: 
El primer paso es identificar los documentos comerciales que se intercambiarán a través de EDI,
como facturas, pedidos, confirmaciones de entrega, entre otros.

Seleccionar un software de EDI: 
Para poder intercambiar datos a través de EDI, necesitarás seleccionar un software especializado en EDI.
Hay varias opciones disponibles en el mercado, así que es importante investigar y seleccionar 
el que mejor se adapte a tus necesidades.

Configurar los acuerdos de intercambio: 
Para intercambiar datos de manera eficiente y precisa, es necesario configurar los acuerdos de intercambio, 
lo que incluye el formato de los datos, los requisitos de validación y la seguridad de los datos.

Establecer una conexión con los socios comerciales: 
Para intercambiar datos de manera efectiva, necesitarás establecer una conexión con tus socios comerciales 
a través de una red de comunicación, como Internet o una red privada.

Procesar y enviar los documentos: 
Una vez que se han establecido las conexiones y configurado los acuerdos de intercambio, 
los documentos pueden ser procesados y enviados a los socios comerciales.

Verificar la recepción de los documentos: 
Es importante verificar que los documentos han sido recibidos correctamente por los socios comerciales. 
Esto se puede hacer mediante el intercambio de mensajes de confirmación de recepción.

Integrar los datos en los sistemas empresariales: 
Finalmente, los datos recibidos a través de EDI se deben integrar en los sistemas empresariales, 
como los sistemas de gestión de inventario o contabilidad, para que puedan ser utilizados de manera efectiva
en la empresa.

## swift 
Transacciones bancarias
## VDA
VDA significa "Verband der Automobilindustrie", que en español se traduce como "Asociación de la Industria Automotriz". Se trata de una organización alemana que representa los intereses de la industria automotriz y promueve el desarrollo y la implementación de estándares comunes en la cadena de suministro de la industria. El estándar VDA se utiliza en particular para el intercambio electrónico de datos entre proveedores y fabricantes de la industria automotriz.
## 810/INVOC
La factura 810 es un tipo de factura electrónica utilizada en la facturación empresarial para el intercambio de información de compras y ventas entre empresas. También se le conoce como Factura de Acreedor o Factura de Proveedor. Esta factura es utilizada para registrar las compras de bienes y servicios realizadas por una empresa a sus proveedores y es la respuesta a la factura 807, la cual es emitida por la empresa proveedora y representa la venta del bien o servicio.


## TIPOS DE TRANSACCIONES
810 - Factura
850 - Orden de compra
855 - Aviso de orden de compra
856 - Aviso de envío
820 - Pago/orden de remesa
846 - Aviso de inventario
997 - Confirmación de recibido
999 - Confirmación de aceptación/rechazo

ORDERS           Purchase order message

ORDRSP           Purchase Order Acknowledgment

INVRPT            Inventory Inquiry/Advice

DESADV           Shipment Notification ASN

INVOIC            Invoice

CONTRL           Functional acknowledgment

ORDCHG         Purchase Order Change – Buyer Initiated


purchase order (850/ORDERS)
facturacion	810/INVOC  
856/aviso de embarque
820/REMADV
997/Aviso de entrega
830/Aviso de aproximado
204/de donde a donde
210/Notificaciones de estatus
824/notificaciones de errores

st numero de transaccion

## canales de comunicacion
sftp
ftp/vpn
as2

## Definicion de van 
Pequeñas redes con conexiones establcidas
Negocios antiguos
costo de transmicion por kilocaracter
el codigo identificador del producto suele ser el de el cliente al que se le esta vendiendo.

bic mapping designer
copiar la informacion a las variables
para mapear a los 

inhouse
documento con cierta estructura no estandarizada
xml conexion a una db

### Sintaxis de BIS
segmento *
elemento virgulilla 
subelemento @

Los secciones se separan por virgulillas para indicar el fin de una seccion
los elementos se separan por astericos para indicar el fin de un elemento


## Sintaxis
N1 * BT * ABC Inc. * 9 * 1234567 ~

Segment: ID N1
Data element terminator: *
Data element qualifier: BT & 9
Company Name: ABC Inc
Company ID: 1234567
Segment Terminator: ~


edi address 

Control F para remplazar.
