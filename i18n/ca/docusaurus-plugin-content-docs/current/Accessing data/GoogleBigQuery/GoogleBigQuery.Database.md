---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importa dades d&#39;una base de dades de Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Retorna una taula en què es mostren els projectes disponibles a Google BigQuery. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:      <ul>        <li><code>ConnectionTimeout</code>: durada que controla el temps que s'ha d'esperar abans d'anul·lar un intent de connexió amb el servidor. El valor per defecte és el valor del temps d'espera de connexió de l'ODBC.</li>        <li><code>CommandTimeout</code>: durada que controla durant quant de temps es pot executar la consulta del servidor abans de cancel·lar-se.</li>        <li><code>BillingProject</code>: ID del projecte de facturació. El valor per defecte és el primer projecte disponible.</li>        <li><code>UseStorageApi</code>: especifica si s'utilitza l'API d'emmagatzematge de BigQuery per als grans conjunts de resultats. El valor per defecte és true per utilitzar l'API d'emmagatzematge. Es definex amb el valor false per no utilitzar l'API d'emmagatzematge.</li>      </ul>    El paràmetre de registre s'especifica com [opció1 = valor1, opció2 = valor2...].    


## Examples

### Example #1 
Mostra els projectes disponibles a Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



