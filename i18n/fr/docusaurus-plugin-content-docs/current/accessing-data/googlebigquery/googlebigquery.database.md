---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importe les données d'une base de données Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Retourne une table listant les projets disponibles dans Google BigQuery. Un paramètre d’enregistrement facultatif, `options`, peut être spécifié pour contrôler les options suivantes :

-   `ConnectionTimeout` : Une durée qui contrôle le temps d’attente avant d’abandonner une tentative de connexion au serveur. La valeur par défaut est la valeur du délai d’expiration de connexion ODBC.
-   `CommandTimeout` : Une durée qui contrôle la durée d’exécution de la requête côté serveur avant qu’elle ne soit annulée.
-   `BillingProject` : ID de projet de facturation. La valeur par défaut est le premier projet disponible.
-   `UseStorageApi` : indique s’il faut utiliser l’API de stockage BigQuery pour les grands ensembles de résultats. La valeur par défaut est true pour utiliser l’API Storage. Défini sur false pour ne pas utiliser l’API de stockage

Le paramètre d’enregistrement est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\].


## Examples

### Example #1
Lister les projets disponibles dans Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



