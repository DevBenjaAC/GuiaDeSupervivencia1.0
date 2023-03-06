## Soporte Facturacion
Existen diferentes tipos de soportes a realizar por el tipo de cliente.

## Aqui tienes los nombres de soportes mas comunes a relizar:

## SOPORTES Y DETALLES DE ERROR EN STRUCTURE VALIDATION REPROCESO
Contacto: IM
IDENTIFICAR EL ERROR
control f con movto para encontrar el error en el debug
##### Se reprocesa.
1 entrar a la nube
2 buscar en base de datos en preCFD
3 Actualizar preStatus set input = 1 where movto= ´movto a cambiar´;
comprobar en preStatus para ver si la toma
4 Buscar en base de datos en tabla CFD where movto='movto a comprobar haya sido timbrado'
5 Notificar al contacto que esta hecho exitosamente.

## SOPORTES Y DETALLES -Actualizar USO DE CFDI g01 a G03
Contacto: RU

Paramos el generador CMD
este se cambia con control C para deterlo, nos pedira confirmar Y

El contacto nos dara el folio de la movto a cambiar el useCFDI

Cambiamos manualmente
useCFDI:
de G01 a G03 o cambiamos con query

activamos el generador localizado en el entorno de trabajo del contacto

comprobamos que timbre
notofocamos al contacto que ya se timbro

Query para actualizar:
update useCFDI set ="S01" where movto= "movto a cambiar"

### Soporte de comprobacion
Este soporte es sencillo y simplemente es corroborar y comprobar que una factura este o no este timbrada.
La forma mas rapida es verificar que en el comienzo del nombre del archivo comience con la palabra "PRE".
### Soporte de errores en XML [Click- Para ir a las instrucciones del soporte](https://github.com/DevBenjaAC/GuiaDeSupervivencia1.0/blob/main/Soportes%20Facturacion/XMLConProblemas.md)
Uno de los soportes mas comunes    
### Soporte de errores de lado del cliente.
### Soporte de errores en Generador
### Soporte de error en mapping

# Atencion de los soportes
Para atender a un cliente que requiere resolver un problema de facturación electrónica, es recomendable seguir los siguientes pasos:

Escuchar al cliente: es importante que el cliente tenga la oportunidad de explicar su problema detalladamente.

Identificar el problema: después de escuchar al cliente, es importante identificar cuál es el problema que está experimentando. Para ello, se pueden hacer preguntas adicionales para aclarar cualquier confusión.

Ofrecer una solución: una vez que se ha identificado el problema, es momento de ofrecer una solución. Si se cuenta con la información y los recursos necesarios para resolver el problema, se puede ofrecer una solución inmediata. De lo contrario, se puede indicar al cliente cuáles son los pasos que se deben seguir para resolver el problema y cuánto tiempo puede tomar.

Seguir el proceso: si se requiere realizar un proceso para resolver el problema, es importante seguirlo detalladamente y con precisión. Se debe asegurar que todas las etapas se completen en orden y en tiempo.

Dar seguimiento: después de resolver el problema, es importante dar seguimiento al cliente para asegurarse de que el problema se haya resuelto completamente y de que el cliente esté satisfecho con la solución.

Documentar: finalmente, es recomendable documentar el problema, la solución y cualquier otra información relevante. Esto puede ser útil en el futuro para resolver problemas similares y para mejorar el servicio al cliente.

## Si esta molesto
Cuando un cliente está molesto, es importante abordar la situación con calma y profesionalismo. Aquí hay algunos pasos que puede seguir para atender al cliente y resolver el problema de facturación electrónica:

Escuche al cliente: permítale al cliente expresar su frustración y asegúrese de prestar atención activa a lo que está diciendo.

Agradezca al cliente: agradézcale al cliente por comunicar su problema y por darle la oportunidad de resolverlo.

Asegúrese de comprender el problema: asegúrese de que comprende completamente el problema del cliente, para poder proporcionar una solución adecuada.

Explique la solución: explique detalladamente cómo piensa resolver el problema del cliente y hágale saber qué puede esperar.

Ofrezca una solución justa: asegúrese de que la solución que ofrece es justa y satisfará al cliente. 

Asegúrese de seguir con el problema: haga un seguimiento con el cliente para asegurarse de que el problema se ha resuelto satisfactoriamente.

Es importante mantener la calma y ser respetuoso en todo momento, incluso si el cliente sigue molesto. Con una actitud positiva y respetuosa, puede ayudar al cliente a sentirse escuchado y a encontrar una solución satisfactoria.

