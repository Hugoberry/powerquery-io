---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importe les données d&#39;une base de données Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Retourne une table listant les projets disponibles dans Google BigQuery. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour gérer les options suivantes :      <ul>        <li><code>ConnectionTimeout</code>: Durée qui détermine le temps d'attente avant d'abandonner une tentative de connexion au serveur. La valeur par défaut est la valeur Délai de connexion ODBC.</li>        <li><code>CommandTimeout</code>: Durée qui détermine le temps d'exécution autorisé de la requête côté serveur avant qu'elle ne soit annulée.</li>        <li><code>BillingProject</code> : ID du projet de facturation. La valeur par défaut est le premier projet disponible.</li>        <li><code>UseStorageApi</code> : Indique s'il faut utiliser l'API Storage BigQuery pour les jeux de résultats volumineux. La valeur par défaut est true pour utiliser l'API Storage. Définissez la valeur sur false pour ne pas utiliser l'API Storage</li>      </ul>    Le paramètre d'enregistrement est spécifié sous la forme [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Lister les projets disponibles dans Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



