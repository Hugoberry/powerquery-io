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

Devuelve una tabla en la que se muestran los proyectos disponibles en Google BigQuery. Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `ConnectionTimeout`: duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es el valor de tiempo de espera de conexión ODBC.
-   `CommandTimeout`: una duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de que se cancele.
-   `BillingProject`: Id. del proyecto de facturación. El valor predeterminado es el primer proyecto disponible.
-   `UseStorageApi`: especifica si se usará la API de Storage de BigQuery para conjuntos de resultados grandes. El valor predeterminado es true en cuanto al uso de la API de Storage. Se establece en false para no usar la API de almacenamiento

El parámetro de registro se especifica como \[opción1 = valor1, opción2 = valor2...\].


## Examples

### Example #1
Muestra los proyectos disponibles en Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



