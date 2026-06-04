---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importa dades d'una base de dades de Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Retorna una taula en què es mostren els projectes disponibles al Google BigQuery. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `ConnectionTimeout`: durada que controla el temps que s'ha d'esperar abans d'anul·lar un intent de connexió amb el servidor. El valor per defecte és Temps d'espera de connexió ODBC esgotat.
-   `CommandTimeout`: durada que controla el temps de què disposa la consulta del servidor per executar-se abans que es cancel·li.
-   `BillingProject`: ID del projecte de facturació. El valor per defecte és el primer projecte disponible.
-   `UseStorageApi`: especifica si s'utilitza l'API d'emmagatzematge de BigQuery per als grans conjunts de resultats. El valor per defecte és true per fer servir l'API d'emmagatzematge. Defineix com a False per no fer servir l'API d'emmagatzematge

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\].


## Examples

### Example #1
Mostra els projectes disponibles a Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



