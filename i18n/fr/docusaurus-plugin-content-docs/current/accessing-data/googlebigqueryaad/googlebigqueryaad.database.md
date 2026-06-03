---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importer des données d’une base de données BigQuery à l’aide d’e Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Renvoie un tableau répertoriant les projets disponibles dans Google BigQuery en utilisant Microsoft Entra ID pour `ID de projet de facturation` . Un paramètre d’enregistrement facultatif, `options`, peut être spécifié pour contrôler les options suivantes :

-   `ConnectionTimeout` : Une durée qui contrôle le temps d’attente avant d’abandonner une tentative de connexion au serveur. La valeur par défaut est la valeur du délai d’expiration de connexion ODBC.
-   `CommandTimeout` : Une durée qui contrôle la durée d’exécution de la requête côté serveur avant qu’elle ne soit annulée.
-   `UseStorageApi` : indique s’il faut utiliser l’API de stockage BigQuery pour les grands ensembles de résultats. La valeur par défaut est true pour utiliser l’API Storage. Défini sur false pour ne pas utiliser l’API de stockage
-   `AudienceUri` : il s’agit de l’URI d’audience que le pilote ODBC peut utiliser pour ses demandes d’échange de jetons. Ce champ doit être une URI complète (par ex., //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) où pool\_id est un nom global unique pour identifier le pool de main-d’œuvre.

Le paramètre d’enregistrement est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\].


## Examples

### Example #1
Lister les projets disponibles dans Google BigQuery à l’aide de Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



