---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retourne les suites de rapport dans Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Retourne une table de paquets multidimensionnels d'Adobe Analytics. Vous pouvez spécifier un paramètre d'enregistrement facultatif, `options`, pour contrôler les options suivantes :

-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).
-   `MaxRetryCount` : Nombre de nouvelles tentatives à effectuer lors de l'interrogation du résultat de la requête. La valeur par défaut est 120.
-   `RetryInterval` : Durée entre les nouvelles tentatives. La valeur par défaut est de 1 seconde.
-   `Implementation` : Spécifie la version de l’API Adobe Analytics. Les valeurs valides sont : "2.0". La valeur par défaut utilise l’API version 1.4.



## Category
Accessing data
