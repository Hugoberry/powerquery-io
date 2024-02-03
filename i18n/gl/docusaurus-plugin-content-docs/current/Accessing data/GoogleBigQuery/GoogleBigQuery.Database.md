---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importar datos dunha base de datos de Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Devolve unha táboa que enumera os proxectos dispoñibles en Google BigQuery. Pódese especificar un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:      <ul>        <li><code>ConnectionTimeout</code>: duración que controla o tempo de espera antes de abandonar un intento de establecer unha conexión co servidor. O valor predefinido é o valor de tempo de espera da conexión de ODBC.</li>        <li><code>CommandTimeout</code>: duración que controla durante canto tempo pode executarse a consulta no servidor antes de cancelarse.</li>        <li><code>BillingProject</code>: ID do proxecto de facturación. O valor predefinido é o primeiro proxecto dispoñible.</li>        <li><code>UseStorageApi</code>: especifica sse se vai usar a API de almacenamento de BigQuery para conxuntos de resultados de gran tamaño. O valor predefinido é true para usar a API de almacenamento. Configúreo en false para non usar a API de almacenamento</li>      </ul>    O parámetro de rexistro especifícase así: [optión1 = valor1, optión2 = valor2...].    


## Examples

### Example #1 
Lista de proxectos dispoñibles en Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



