---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importar datos desde una base de datos de Google BigQuery mediante Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Devuelve una tabla que enumera los proyectos disponibles en Google BigQuery mediante Azure AD para <code>Id. de proyecto de facturación</code> . Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las siguientes opciones:      <ul>        <li><code>ConnectionTimeout</code>: una duración que controla el tiempo de espera antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es valor de tiempo de espera de conexión ODBC.</li>        <li><code>CommandTimeout</code>: duración que controla cuánto tiempo se permite ejecutar la consulta del lado servidor antes de cancelarse.</li>        <li><code>UseStorageApi</code>: especifica si se va a usar la API de almacenamiento de BigQuery para conjuntos de resultados grandes. El valor predeterminado es true para usar la API de almacenamiento. Se establece en false para no usar la API de almacenamiento</li>        <li><code>AudienceUri</code>: este es el URI de audiencia que el controlador ODBC puede usar para sus solicitudes de intercambio de tokens. Este campo debe ser un URI completo (es decir, //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), donde pool_id es un nombre único global para identificar el grupo de empleados.</li>      </ul>    El parámetro de registro se especifica como [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Mostrar los proyectos disponibles en Google BigQuery mediante Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



