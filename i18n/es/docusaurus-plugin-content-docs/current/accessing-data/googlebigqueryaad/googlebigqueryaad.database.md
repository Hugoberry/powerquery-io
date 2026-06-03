---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importación de datos desde una base de datos de Google BigQuery mediante Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que muestra los proyectos disponibles en Google BigQuery con Microsoft Entra ID para `Id. de proyecto de facturación` . Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `ConnectionTimeout`: duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es el valor de tiempo de espera de conexión ODBC.
-   `CommandTimeout`: una duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de que se cancele.
-   `UseStorageApi`: especifica si se usará la API de Storage de BigQuery para conjuntos de resultados grandes. El valor predeterminado es true en cuanto al uso de la API de Storage. Se establece en false para no usar la API de almacenamiento
-   `AudienceUri`: este es el URI de audiencia que el controlador de ODBC puede usar para sus solicitudes de intercambio de tokens. Este campo debe ser un URI completo (es decir, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), donde pool\_id es un nombre único global para identificar el grupo de empleados.

El parámetro de registro se especifica como \[opción1 = valor1, opción2 = valor2...\].


## Examples

### Example #1
Mostrar los proyectos disponibles en Google BigQuery mediante Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



