/************** CFDI **************/
select * from preStatus --
select * from preCFD --Datos generales de una factura
select * from preReceiver--Datos del Receptor
select * from preCFDDetail --Datos de los conseptos(Productos o servicios)
select * from preTTaxesDetail--Impuestos Trasladados por concepto
select * from preRTaxesDetail--Impuestos Retenidos por concepto
select * from preTTaxes --Resumen de impuestos trasladados
select * from preRTaxes --Resumen de impuestos retenidos
select * from preCFDRelated--Documentos Relacionados
select * from pre_vwm_addenda--Datos extras para addendas
select * from PreDelivery_Address--Datos extras para PDF (Dirección de entrega)
select * from PreEmitterAddress--Datos extras para PDF
select * from preShipto--Datos extras para PDF(Dirección de envío)
select * from preAdditionalInfo----Datos extras para PDF

select * from prePart--Datos extras de los conceptos(Segmanto Parte)
select * from preCustoms--Tabla reutilizada para numeros de pedimento


/************** COMERCIO EXTERIOR **************/
select * from precomercio_exterior--Datos generales del complemento
select * from predestinatario_ce--Datos del Destinatario
select * from predescespecificas_ce--Datos extras de los conceptos

/************** PAGOS **************/
select * from prePayment--Datos generales del complemento
select * from preRelatedDocument--Datos de los documentos relacionados(Facturas pagadas)
select * from preRTaxesPaymentDR--Impuestos Retenidos de los documentos relacionados
select * from preTTaxesPaymentDR--Impuestos Trassladados de los documentos relacionados
select * from preTotalPayment--Totales  generales de complemento
select * from preTTaxesPayment--Impuestos Trassladados por pago
select * from preRTaxesPayment--Impuestos Retenidos por pago


/************** CARTA PORTE **************/
select * from preCartaPorte--Datos generales del complemento
select * from preAutoTransporteFederal --Datos Generales cuando es transporte federal
select * from preTransporteAereo--Datos Generales cuando es transporte aereo
select * from preTransporteFerroviario--Datos Generales cuando es transporte Ferroviario
select * from preTransporteMaritimo--Datos Generales cuando es transporte Maritimo
select * from preCantidadTransporta--Resumen de mercancias cuando hay mas de un origen o destino
select * from preCarro--Datos de segmento Carro para transporte Ferroviario
select * from preContenedor--Datos de segmento Contenedor para transporte Maritimo
select * from preCarro ---Datos de segmento Carro para transporte Ferroviario
select * from preContenedorCarro ---Datos de segmento Contenedor para transporte Ferroviario
select * from preDerechosDePaso--Datos de Derechos de paso para transporte Ferroviario
select * from preDetalleMercancia--Datos de detalles de las mercancias
select * from preIdentificacionVehicular--Datos del vehículo de transporte para Transporte Federal
select * from preMercancias--Datos generales del total de mercancías
select * from preMercancia --Datos de cada una de las mercancías
select * from prePedimento --Datos de los pedimentos por mercancía
select * from preRemolque --Datos del Remolque para Transporte Federal
select * from preTipoFiguratransporte-- Datos generales de los tipos Figura Transporte(Operador...)
select * from preTipoUbicacion --Datos generales de los Tipo Ubicación (Origen/Destino)
select * from preUbicacion--Asignación de Tipo Estación y Domicilio al Tipo Ubicación
select * from preDomicilio--Dirección de origen/Destino/Figura Transporte

/************** OTROS COMPLEMENTOS **************/
select * from preLeyendasFiscales --Datos para complemento de Leyendas Fiscales
select * from preretlocal--Datos para complemento de Retenciones Locales
/************** COMPLEMENTARIOS**************/
select * from movto_sap--Regitsro de Datos para Response
select * from b64--Datos en base 64 para addendas
/************** FINALES **************/
select * from CFD-- Tabla para el registro de información general de CFDIs timbrados
select * from StampDetail---- Tabla para el registro del timbre Fiscal de los CFDIs timbrados
select * from fiscalDS-- Tabla para el registro de sello digital y cadena original de CFDIs timbrados
select * from CFDRelated-- Tabla para el registro de documentos relacionado en el documento timbrado
select * from RTaxes--Registro de los impuestos retenidos de un CFDI timbrado
select * from TTaxes--Registro de los impuestos trasladados de un CFDI timbrado
select * from Receiver-- Registro de Receptores para relación con CFD
select * from Payment-- Tabla para el registro de información general de Complementos de pago timbrados
select * from RelatedDocumentPayment-- Tabla para el registro de información de los documentos relacionados(pagados) en un Complementos de pago timbrado
select * from LogInvoiceErrors--Registro de los errores generados en los CFDIs
/************** CONFIGURACIONES **************/
select * from Certificado--Registro de los Certificados para el timbrado
select * from CFDType--Resgistro de tipos de CFDI
select * from FoliosData--Registro de los folio a utilizar por tipo de documento
select * from Configuration--Registro de rutas
select * from Emitter--Datos generales del emisor
select * from EmitterAddress--Dirección del emisor


select * from Keys--Registro de las llaves para timbrar (.cer y .cey)
select * from pac--Registro del PAc para el timbrado
select * from pacPriority--Tabla para asignar prioridad a PAC
select * from restricciones--Tabla para indicar uso de notas en addendas
select * from TaxRegime--Registro dle Regimen Fiscal del Receptor

/************** EXTRAS **************/
select * from cartaPorteTransportista --Registro de Cartas porte para Transportistas (Decoplas, MAgna- 4 on the go)
select * from send_customer--Registro para envío de documentos por correo
/************** CANCELACIÓN **************/
select * from Cancellation--Registro de cancelación de documentos

/************** CATALOGOS **************/
select * from cfdi_LeyendasFiscales--Registro de addendas a utilizar para complemento
select * from Clientes--Clientes dados de alta para el timbrado
select * from Products--Productosdados de alta para el timbrado
select * from TransferedTaxes--Catalogo de impuestos a utilizar en el portal

/************** NO USADAS **************/
select * from CommunicationStatus
select * from ContEBalanza
select * from ContECatalogo
select * from pacSaldos
select * from preDeta
select * from preLeyenda
select * from prePartCustoms
select * from StampHistory
select * from Stamps
select * from timbres
select * from totalTaxesPayment
select * from Tracing
select * from prePredial

/************** Retenciones **************/
select * from PreRetentions
select * from PreReceiver
select * from PrePeriod
select * from PreTotalRetentions
select * from PreRetTax
select * from PreDividOUtil
select * from PreForeingPayments
select * from PreNoBeneficiary
select * from prestatus