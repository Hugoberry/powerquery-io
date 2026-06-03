---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Retourne les bases de données Analysis Services sur un hôte particulier.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Retourne les bases de données sur une instance d'Analysis Services, `server`. Vous pouvez indiquer un paramètre d'enregistrement facultatif, `options`, pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `TypedMeasureColumns` : Valeur logique qui indique si les types spécifiés dans le modèle multidimensionnel ou tabulaire sont utilisés pour les types des colonnes de mesure ajoutées. Quand sa valeur est false, le type « number » est utilisé pour toutes les colonnes de mesure. La valeur par défaut de cette option est false.
-   `Culture` : Nom de culture spécifiant la culture des données. Correspond à la propriété de chaîne de connexion « Locale Identifier ».
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut dépend du pilote.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `SubQueries` : Nombre (0, 1 ou 2) qui définit la valeur de la propriété « SubQueries » dans la chaîne de connexion. Il contrôle le comportement des membres calculés dans les sous-sélections ou les sous-cubes. (La valeur par défaut est 2).
-   `Implementation`



## Category
Accessing data
