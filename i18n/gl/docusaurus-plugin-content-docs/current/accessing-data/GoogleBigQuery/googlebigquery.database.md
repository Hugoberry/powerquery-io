---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importar datos dunha base de datos de Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que enumera os proxectos dispoñibles en Google BigQuery. Pode que se especifique un parámetro de rexistro opcional (`opcións`) para controlar as seguintes opcións:

-   `ConnectionTimeout`: unha duración que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexión co servidor. O valor predefinido é o valor da conexión ODBC.
-   `CommandTimeout`: unha duración que controla durante canto tempo pode executarse a consulta no servidor antes de que se cancele.
-   `BillingProject`: Id. do proxecto de facturación. O valor predefinido é o primeiro proxecto dispoñible.
-   `UseStorageApi`: especifica se se vai usar a API de almacenamento de BigQuery para conxuntos de resultados grandes. O valor predefinido é verdadeiro para usar a API de almacenamento. Establecer como falso para non usar a API de almacenamento

O parámetro de rexistro especifícase como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Lista de proxectos dispoñibles en Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



