---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importa dades d'una base de dades del Google BigQuery mitjançant el Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que mostra els projectes disponibles al Google BigQuery amb el Microsoft Entra ID per a `ID del projecte de facturació`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `ConnectionTimeout`: durada que controla el temps que s'ha d'esperar abans d'anul·lar un intent de connexió amb el servidor. El valor per defecte és Temps d'espera de connexió ODBC esgotat.
-   `CommandTimeout`: durada que controla el temps de què disposa la consulta del servidor per executar-se abans que es cancel·li.
-   `UseStorageApi`: especifica si s'utilitza l'API d'emmagatzematge de BigQuery per als grans conjunts de resultats. El valor per defecte és true per fer servir l'API d'emmagatzematge. Defineix com a False per no fer servir l'API d'emmagatzematge
-   `AudienceUri`: és l'URI de l'auditori que el controlador ODBC pot fer servir per a les seves sol·licituds d'intercanvi de testimonis. Aquest camp ha de ser un URI complet (per exemple, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), en què pool\_id és un nom únic global per identificar el grup de personal.

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\].


## Examples

### Example #1
Mostra els projectes disponibles al Google BigQuery mitjançant el Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



