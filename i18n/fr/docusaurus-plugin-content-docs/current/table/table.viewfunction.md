---
title: Table.ViewFunction
---

# Table.ViewFunction


Crée une fonction pouvant être interceptée par un gestionnaire défini sur une vue (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Crée une fonction de vue basée sur `function` qui peut être gérée dans une vue créée par `Table.View`.

Le gestionnaire `OnInvoke` de `Table.View` peut être utilisé pour définir un gestionnaire pour la fonction de vue.

Comme avec les gestionnaires pour les opérations intégrées, si aucun gestionnaire `OnInvoke` n'est spécifié, ou s'il ne gère pas la fonction de vue, ou si une erreur est déclenchée par le gestionnaire, `function` est appliqué au-dessus de la vue.

Référez-vous à la documentation publiée du connecteur personnalisé Power Query pour une description plus complète de `Table.View` et des fonctions de vue personnalisées.



## Category
Table.Table construction
