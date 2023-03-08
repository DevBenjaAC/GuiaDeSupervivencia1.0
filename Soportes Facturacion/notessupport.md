# NOTES OF SUPPORT 
____________________________________________________________________________________________________________________________________________________________________________________
DOCUMENTACIÓN GENERAL
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CLIENTES MANEJADOS
1 MAGNA
 1.1 Decoplas
 1.2 Assembly (Saltillo)
2 HOFFMANN
3 EXTERIORS (en proceso)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREDENCIALES DE DB
NUBE
Server Name:	207.244.231.149
Login:			btobfact
Password:		facelec

PRUEBAS
Server Name:	10.0.100.21
Login:			btobfact
Password:		facelec

DB USADAS DE CLIENTES
DECOPLAS
	DEC970724MY2_DECOPLAS_SA_DE_CV
	
	
	
HOFFMANN
	HQT130527BL5_HOFFMANN_GROUP

ASSEMBLY
	MAS080522HK5_MAGNA_ASSEMBLY
EXTERIORS
	MAS080522HK5_MAGNA_EXTERIORS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREDENCIALES DE SERVIDORES O ESCRITORIO REMOTO

Host:		207.244.231.149			NUBE (Producción)
Usuario: 	Administrator
Password:	6JK6FJrPMuAfD6ePrDyA

Host:		10.0.100.21				Pruebas
Usuario:	Administrator
Password:	8qDjQXMJnbdnLtaf

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREDENCIALES PARA IMPORTAR REPOSITORIOS EN DESIGNER BIC

NUBE
207.244.231.149
btobmaster
b2b.master
https
Port: 8443

10.0.100.20
superadmin
btobsuperadmin
superadmin
btobadmin
Port: 10000
http			(no estoy seguro del todo)
Port: 10000
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
MAPPEOS MANEJADOS HOFFMANN
	I_INHOUSE_IDOC_MX_EPAYMENT_20_to_S_HQT130527BL5_HOFFMANN_GROUP_4
	C_CSV_HOFFMANN_to_S_HQT130527BL5_HOFFMANN_GROUP_40

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RUTAS DE CARPETAS

C:\BTOBFACT
C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CAMBIOS HOFFMANN

1 Quieren reglas específicas de procesamiento para clientes que tienen una o más comas en su nombre además del régimen capital.
1.1 LINK IT TRADE, COMERCIALIZADORA.
1.2 SUMINISTROS INTERNACIONALES LEMA,
2 Quieren extender el límite del nombre del receptor. Se encuentra en 35 caracteres en el txt y 150 en la db. Se tendría que modificar el formato.
DISEÑO Y MANTENIMIENTO ELECTRICO-ELECTRONICO Y SERVICIOS DE PROGRAMACION es un caso.
3 No ha habido respuesta aún a correo solicitando información sobre el tipo de codificación que están enviando para que timbren los Complementos de Pagos.
Se están recibiendo en codificación UCS-2 BE BOM en vez de UTF-16.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOPORTES Y DETALLES HOFFMANN
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1 MOVER ARCHIVOS INHOUSE
Se cortan archivos de una carpeta a otra.
De:
	C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\ptoAddendas
A:
	V:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\ptoAddendas

2 SUBIR PO (Purchase Order)
Se copia el pdf a la ruta:
	C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\Work_directory\input
Esto le moverá a:
	C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\b64\fechaActual

Nota: Algunos archivos llegan con nombres completos, ejemplo:
	"PO. 4530032814. 5057472 HOFFMAN QUALITY TOOLS MEXICO.pdf"
Y no timbran la factura correspondiente.
Para corregirlo, se sube la PO SOLO con el número de folio, ejemplo:
	4530032814.pdf
Para Hoffmann con el cliente AIRBUS HELICOPTERS MEXICO QUERETARO, en 2 ocasiones ha ocurrido que no se timbra la factura por no encontrar la PO.
Se ha resuelto
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
COMPLEMENTOS
1
Los archivos llegan sin extensión y con codificación UCS-2 BE BOM. (Se pueden encontrar en: 
C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\Work_directory\backup\before\20230120)
8Al intentar timbrarse automáticamente marca error en Front de:
	No valid KEY field found for the Segment : 'NO_SEGMENT_FOUND'.
Si se edita el archivo y se cambia su codificación a UTF-8 y se envían a la ruta:
	C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\Work_directory\input_payment
Timbran.
SOLUCIÓN: En el Front en Entites Explorer se debe agregar una regla que convierta la codificación.
2 
Las facturas con tipo de cambio MXN, si tienen las últimas 2 columnas en 0: No timbran.
Si se igualan las últimas 2 columnas a las penúltimas: Timbran.
Ejemplo:
Línea con error (últimas 2 columnas en 0)
	1200005720e8914a8e-ffe2-4d17-a4df-546f74d69b15F2                                      19366.00           1498.56           0.00              0.00
Línea corregida (El primer '1' de la primer columna se omite: se usa para una validación).
	1200005720e8914a8e-ffe2-4d17-a4df-546f74d69b15F2                                      19366.00           1498.56        9366.00           1498.56
Nota: Desconozco si esto es válido, los mappeos se realizan correctamente, pero al venir 0's, se mappean a la db y XML obteniendo el siguiente error:
CRP20268: El campo BaseP que corresponde a Traslado, no es igual a la suma de los importes de las bases registrados en los documentos relacionados donde el impuesto del
documento relacionado sea igual al campo ImpuestoP de este elemento y la TasaOCuotaDR del documento relacionado sea igual al campo TasaOCuotaP de este elemento.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
PORTAL
1 
Error de no poder descargar el Reporte de Errores en el portal.

Se causa por insertarse un error demasiado largo en la tabla "LogInvoiceErrors".

Consultas que lo solucionan:
	select * from LogInvoiceErrors where error like '%Invalid XML Exception javax.xml.bind.MarshalException%'
	update LogInvoiceErrors set error = 'Invalid XML Exception: Error en Estructura de XML' where error like '%Invalid XML Exception javax.xml.bind.MarshalException%'
SOLUCIÓN: Se debe editar el código del generador o ampliar el rango de la cadena en la DB.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
GENERADOR
1 
El generador 4.0 ejecutándose en consola (C:\BTOBFACT\SERVICE_CFDI\Gen40_Nube\GeneradorCFDIService40.bat - Shortcut)
Se hiberna algunos minutos, retrasando el timbrado, se soluciona dando un 'Enter' a la consola.
(Esto puede ocurrir en horas no laborales)

2
Como el generador se hiberna, se cambió a un Service de Windows llamado: "GeneradorCFDIService40"
Se resuelve el error de hibernación pero genera un error de no poderse envíar archivos entre servidores en automático como lo haría ejecutándose en Consola.
Las rutas de archivos a enviarse son manualmente:
	C:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\xml_pdf\fechaActualdeCarpeta
A
	V:\BTOBFACT\HQT130527BL5_HOFFMANN_GROUP\SAP_1C_TEP\ptoAddendas
SOLUCIÓN: Aún desconocido, ya sea por permisos del sistema al servicio, bloqueos de firewall o configuración del Service.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

____________________________________________________________________________________________________________________________________________________________________________________
SOPORTES Y DETALLES DE MAGNA

DECOPLAS
1 Existe el generador específico para Carta Porte (C:\BTOBFACT\SERVICE_CFDI\GENERADOR_CP\GeneradorCFDIService33_CP)
Se cree que puede causar interferencia con el Generador 4.0 por lo que se ejecuta manualmente.
DB: DEC970724MY2_DECOPLAS_SA_DE_CV
CONSULTA: select * from preStatus
Las facturas se encuentran en la tabla:
	preStatus con input = 3

Para generarlas solo se ejecuta el generador de la ruta y se detiene después de generarse el preXML.

MAPPEOS MANEJADOS DECOPLAS
	X_MXCFDIREQ002_CFDI33_to_DB_DEC970724MY2_DECOPLAS
	
2 Cambio en uso de CFDI, usualmente de S01 a I05 o G02.

Tabla: preReceiver
Campo: useCFDI
update preReceiver set useCFDI = '' where movto = ''

____________________________________________________________________________________________________________________________________________________________________________________
EXTERIORS

En proceso de pruebas y pasando por el mismo proceso que Decoplas.
____________________________________________________________________________________________________________________________________________________________________________________
PROYECTO NUEVO

Aún no iniciado.
____________________________________________________________________________________________________________________________________________________________________________________

EXTRAS
Verificar que una factura llegó.
Se puede consultar en BIS6 Front-end: Monitoring/All Process
Se puede buscar en la ruta backup para el correspondiente cliente:
	C:\BTOBFACT\DEC970724MY2_DECOPLAS_SA_DE_CV\GRUPO_DECOPLAS_FILES\backupIdoc

TABLAS PRINCIPALMENTE USADAS
select * from preStatus;
select * from preReceiver;
select * from preReceiver;
select * from LogInvoiceErrors;
select * from StampDetail;
select * from movto_sap;
select * from RelatedDocumentPayment;

select * from preCFD;
select * from preCFDDetail;
select * from preTTaxesDetail;
select * from preTTaxes;
____________________________________________________________________________________________________________________________________________________________________________________
CATALOGO DE USOS DEL CFDI

G01 
Adquisición de mercancías
G02 
Devoluciones, descuentos o bonificaciones 
G03 
Gastos en general 
I01 
Construcciones 
I02 
Mobiliario y equipo de oficina por inversiones 
I03 
Equipo de transporte 
I04 
Equipo de cómputo y accesorios 
I05 
Dados, troqueles, moldes, matrices y herramental 
I06 
Comunicaciones telefónicas 
I07 
Comunicaciones satelitales 
I08 
Otra maquinaria y equipo 
D01 
Honorarios médicos, dentales y gastos hospitalarios. 
D02 
Gastos médicos por incapacidad o discapacidad 
D03 
Gastos funerales. 
D04 
Donativos
D05 
Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación). 
D06 
Aportaciones voluntarias al SAR. 
D07 
Primas por seguros de gastos médicos. 
D08 
Gastos de transportación escolar obligatoria. 
D09 
Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones. 
D10 
Pagos por servicios educativos (colegiaturas) 
CP01
Pagos
CN01
Nómina
S01
Sin Efectos Fiscales
____________________________________________________________________________________________________________________________________________________________________________
Edifact message 

ORDERS - Pedido de productos
DESADV - Aviso de entrega
INVOIC - Factura electrónica
REMADV - Aviso de pago
ORDRSP - Confirmación del pedido
APERAK - Aviso de recepción de datos
SLSRPT - Informe de ventas
CUSDEC - Declaración de aduana
IFTSTA - Estado de la transacción
CONTRL - Confirmación de recepción
____________________________________________________________________________________________________________________________________________________________________________
Algunos ejemplos Price catalogue (PRICAT)
Order (ORDERS)
Despatch advice (DESADV)
Receiving advice message (RECADV)
Invoice (INVOIC)
Delivery Forecast Message (DELFOR)
Instruction to despatch (INSDES)
Instruction to transport (IFTMIN)
Order response (ORDRSP)
Order change (ORDCHG)
Inventory report (INVRPT)
Sales Report (SLSRPT)
Return Announcement  (RETANN)
Article master data / price catalogue (PRICAT)
Remittance Advice (REMADV)
Commercial Dispute Message (COMDIS)
Multiple Payment Message (PAYMUL)
Multiple Credit Message (CREMUL)
____________________________________________________________________________________________________________________________________________________________________________________
SOPORTES Y DETALLES DE MAGNA
DECOPLAS **Reproceso**

Nos daran el folio de la movto con error o no timbrada
Nos conectamos a conexion remota
abrimos el entorno
c/btobfact/decoplas
paramos el generador durante el soporte
hacemos queries
	select * from preCFD
	select * from preStatus
	
Copiamos las que vamos a corregir de las tablas a las queries
Hacemos un update 1 a la movto indicada 
	update preStatus set input = "1"
	where movto = "123232movto"
	
Reactivamos el generador 
revisamos sean timbradas 
avisamos que el soporte fue exitoso.
____________________________________________________________________________________________________________________________________________________________________________________
SOPORTES Y DETALLES DE MAGNA
DECOPLAS ***Actualizar USO DE CFDI g02 a s01****   Devoluciones a sin efectos fiscales

Nos daran el folio de la movto con error o no timbrada
Nos conectamos a conexion remota
abrimos el entorno
c/btobfact/decoplas
paramos el generador durante el soporte
hacemos un

	Select * from preCFD
	update useCFDI set ="s01" where useCFDI= "g02"


____________________________________________________________________________________________________________________________________________________________________________________
941 estandarizar el layout para tener mas clientes con el mismo y no 20 clientes distintos
____________________________________________________________________________________________________________________________________________________________________________________
SOPORTES Y DETALLES DE MAGNA Decoplas
DECOPLAS ***Actualizar USO DE CFDI g01 a G03****
	Contacto: Rogelio Ugalde

Paramos el generador CMD
	este se cambia con control C para deterlo, nos pedira confirmar Y
	
Nos daran el folio de la movto a cambiar el useCFDI

Cambiamos manualmente
	useCFDI:
		de G01 a G03
		
activamos el generador
	Se activa dando ENTER
	
comprobamos que este timbrada
avisamos que ya esta timbrada

	Select * from preCFD
	update useCFDI set ="S01" where movto= "g02"
___________________________________________________________________________________________________________________________________________________________________________________
SOPORTES Y DETALLES DE MAGNA- OLSA ERROR EN STRUCTURE VALIDATION REPROCESO
	Contacto: Ismael Muñoz
IDENTIFICAR EL ERROR
	control f con movto para encontrar el error en el debug
Se reprocesa.
1 entrar a la nube
2 buscar en base de datos en preCFD
3 Actualizar preStatus set input = 1 where movto= ´movto a cambiar´;
comprobar en preStatus para ver si la toma
___________________________________________________________________________________________________________________________________________________________________________________
SOPORTES DE ADDENDA

QUERY movtosap validacion de insert
si esta ahi se borra el movtosap
se pide reenvio y se reinicia en bis

______________________
select * from Certificado
Se verifica la caducidad del certificado.
____________________________________________________________________________________________________________________________________________________________
Bic mapping Designer 

manage Reposiroty Connection 
	create Repository 
_____________________________________________________________________________________________________________________________________________________________________________
IOT - Gerardo Thompsom
*	Ingresar MicroChip de Monogoto a Honewell´s
		
*	Mandar a Gerardo:
*		Numero de Folio de IOT de la Sim Card.
*		Marcar HoneyWell´s.
	
*	Instalar IDE de Arduino.
		Practicas con placa arduino
	
	Compra de placa Arduino
	
	Usar la consola de monogoto
		Usar los apartados de la interfaz
		Conocer las utilidades de cada seccion
______________________
DOCUMENTACION SOBRE LOS SOPORTES DE PDF'S NO PINTADOS.
Se cree que la Db tiene conflicto con la recepcion de datos, jasper conflictua esta relacion y no
printa la informacion en el PDF, por lo que el pdf se presenta Vacio.

SOLUCION EDICION DE PDFs
REPROCESAR LOS XML en el 21
Tomar los PDFS y editarlos en Libre Office en DRAW
Guardar los Dibujos y exportarlos en PDF sustituyendo los anteriores
Enviar al cliente los PDFS terminados.

--EDICION DE PDFS 
--PARTE SUPERIOR
Folio fiscal es UUID localizado en TFD
No.serie Certificado del SAT es NoCertifcadoSAT y se localiza en TFD 
Fecha y hora de certificacion es FECHATimbrado y se localiza en TFD
No. Certificado es NoCertifcado y se localiza en CFDI:comprobante
RFC superior del archivo es RFC y se localiza en CFDI:emisor
Fecha-Date es fecha y se localiza en CFDI:comprobante

--PARTE INFERIOR
sello Digital del CFDI es sello y se localiza en CFDI:comprobante
sello del SAT es  SelloSAT y se localiza en TFD 

--Cadena orginal del complemento de certificacion digital del SAT
|2do Apartado| UUID es folio fiscal localizado en TFD 
|3er Apartado| Fecha y hora de certificacion
|4to Apartado| RFCProvCertific y se localiza en TFD 

--------------------------------------------------------------------------------
______________________
========Monogoto======
	
	Se busco acceder a pruebas en nube y SMS para obtener acceso a todos los datos a traves de la consola de monogoto por medio de la APN.
	Se configuro el apn con
		MONOGOTO.DATA
	Se preeve que esta configuracion puede admitir diferentes campos para la recepcion y la emision de datos
	a traves de la consola.
	
	Se hacen diversas pruebas de emision de SMS a traves de la consola.
______________________
DISPOSITIVOS:
	Honewell´s tablet Celular 
	Armor x7 pro Telefono Celular


	Se cuenta con TABLET HoneyWell´s
	EL imei es:
		990013560008901
	EL ICCID es:
		8999911240071988632
	cuenta con sistema operativo Android 8.	
		
Se recibe un nuevo telefono, es un ulefone armor x7 PRO
	Se insertan dos SIMS
	El telefono es DUAL SIM 
	Se insertan DOS IOT SIM-CARD 
		terminacion: 
			sim 8628 para el sim 1
			sim 8633 para el sim 2
	
	Cuenta con Dos IMEI:
		sim 8628-357624581455017
			Su ICCID es:
				8999911240071988628
		sim 8633-357624581455025
			su ICCID es:
				8999911240071988633
______________________

	Se configura la APN como data.mono
		La Red es:
		8633- AT&T
		8628- Radio Dipsa
		8632- Telefonica
		
	Se agega cuenta de gmail.
		btob.internet.ot 
		Admin2023*
		
	Se configura el acceso a Tablet Celular Honewell´s por medio de acceso touch L invertida.
	Se configura el acceso a dispositivo Armor x7 pro por medio de Captura de rostro y por acceso touch L invertida.
	
______________________

SE HACEN LAS SIGUIENTES PRUEBAS:

	Prueba 1
		SMS a traves de DATOS DE RED 
	Prueba 2 
		SMS a traves de DATOS DE RED 
	Prueba 3
		Se desactiva wifi
			Se asegura que esten activos los DATOS de RED
	Prueba 4 
		Se Verifica la red
			La red de recepcion es TELEFONICA
	Prueba 5 
		Se logra la recepcion de SMS a traves de la consola de monogoto.
	Prueba 6
		Se configuro la RED con VPN de monogoto.data
			Se hace un envio de SMS a Gerardo Thompsom
	Prueba 7
		Se envia SMS a Gerardo Gomez a traves de SIM 1 de Armor X7 pro
	Prueba 8 
		Se envia SMS a Gerardo Gomez a traves de SIM 2 de armor X7 pro 
	Prueba 9
		Se envia SMS a Edgar Alvarado a traves de SIM 1 de armor x7 pro 
	Prueba 10 
		Se envia SMS a Edgar Alvarado a traves de sim 2 de armor x7 pro
______________________
