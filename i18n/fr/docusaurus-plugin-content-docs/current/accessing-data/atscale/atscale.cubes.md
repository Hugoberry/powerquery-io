---
title: AtScale.Cubes
---

# AtScale.Cubes


Données DirectQuery/d'importation d'un cube AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Retourne les données d'un cube AtScale sur le serveur `server`. Vous pouvez spécifier un paramètre d'enregistrement facultatif, `options`, pour contrôler les options suivantes :

-   `TypedMeasureColumns` : Valeur logique indiquant si les types spécifiés dans le modèle tabulaire ou multidimensionnel sont utilisés pour les types des colonnes de mesure ajoutées. Si la valeur est false, le type « number » est utilisé pour toutes les colonnes de mesure. La valeur par défaut de cette option est false.
-   `CommandTimeout` : Durée (en secondes) qui contrôle le temps d'exécution de la requête côté serveur avant qu'elle ne soit annulée. La valeur par défaut dépend du pilote.
-   `ConnectionTimeout` : Durée (en secondes) qui contrôle le temps d'attente avant abandon d'une tentative de connexion au serveur. La valeur par défaut dépend du pilote.

Le paramètre d'enregistrement est spécifié sous la forme \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Liste les données d'un cube AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



