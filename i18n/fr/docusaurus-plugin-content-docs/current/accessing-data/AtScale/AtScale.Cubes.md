---
title: AtScale.Cubes
---

# AtScale.Cubes


Données DirectQuery/d&#39;importation d&#39;un cube AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Retourne les données d'un cube AtScale sur le serveur <code>server</code>. Vous pouvez spécifier un paramètre d'enregistrement facultatif, <code>options</code>, pour contrôler les options suivantes :<ul>        <li><code>TypedMeasureColumns</code> : Valeur logique indiquant si les types spécifiés dans le modèle tabulaire ou multidimensionnel sont utilisés pour les types des colonnes de mesure ajoutées. Si la valeur est false, le type " number " est utilisé pour toutes les colonnes de mesure. La valeur par défaut de cette option est false.</li>        <li><code>CommandTimeout</code> : Durée (en secondes) qui contrôle le temps d'exécution de la requête côté serveur avant qu'elle ne soit annulée. La valeur par défaut dépend du pilote. </li>        <li><code>ConnectionTimeout</code> : Durée (en secondes) qui contrôle le temps d'attente avant abandon d'une tentative de connexion au serveur. La valeur par défaut dépend du pilote. </li></ul>Le paramètre d'enregistrement est spécifié sous la forme [option1 = value1, option2 = value2...].


