---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importa datos de una base de datos de Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

      Devuelve una tabla en la que se muestran los proyectos disponibles en Google BigQuery. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:      <ul>        <li><code>ConnectionTimeout</code>: duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es el valor del tiempo de espera de la conexión de ODBC.</li>        <li><code>CommandTimeout</code>: duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de que se cancele.</li>        <li><code>BillingProject</code>: id. del proyecto de facturación. El valor predeterminado es el primer proyecto disponible.</li>        <li><code>UseStorageApi</code>: especifica si se usará la API de Storage de BigQuery para conjuntos de resultados grandes. El valor predeterminado es true en cuanto al uso de la API de Storage. Si se establece en false, no se usará la API de Storage.</li>      </ul>    El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...].    


## Examples

### Example #1 
Muestra los proyectos disponibles en Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



