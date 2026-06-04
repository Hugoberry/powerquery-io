---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importar datos dunha base de datos de Google BigQuery mediante a ID de Microsoft Entra


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa co listado de proxectos dispoñibles en Google BigQuery mediante a ID de Microsoft Entra para `ID do proxecto de facturación` . Pode que se especifique un parámetro de rexistro opcional (`opcións`) para controlar as seguintes opcións:

-   `ConnectionTimeout`: unha duración que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexión co servidor. O valor predefinido é o valor da conexión ODBC.
-   `CommandTimeout`: unha duración que controla durante canto tempo pode executarse a consulta no servidor antes de que se cancele.
-   `UseStorageApi`: especifica se se vai usar a API de almacenamento de BigQuery para conxuntos de resultados grandes. O valor predefinido é verdadeiro para usar a API de almacenamento. Establecer como falso para non usar a API de almacenamento
-   `AudienceUri`: este é o público URI que o controlador ODBC pode usar para as solicitudes de intercambio de token. Este campo debe ser un URI totalmente cualificado (é dicir, //iam.googleapis.com/locations/global/workforcePools/ $\{pool\_id\}/providers/azuread), onde pool\_id é un nome único a nivel global para identificar o grupo de persoal.

O parámetro de rexistro especifícase como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Enumerar os proxectos dispoñibles en Google BigQuery mediante a ID de Microsoft Entra
```powerquery
GoogleBigQueryAad.Database()
```



