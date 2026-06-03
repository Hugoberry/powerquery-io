---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Crée une fonction qui peut être interceptée par un gestionnaire défini sur une vue (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Crée une fonction d’affichage basée sur `function` qui peut être gérée dans une vue créée par `Binary.View`.

Le gestionnaire `OnInvoke` de `Binary.View` peut être utilisé pour définir un gestionnaire pour la fonction de vue.

Comme avec les gestionnaires pour les opérations intégrées, si aucun gestionnaire `OnInvoke` n’est spécifié, s’il ne gère pas la fonction de vue, ou si une erreur est déclenchée par le gestionnaire, `function` est appliqué au-dessus de la vue.

Referez-vous à la documentation publiée du connecteur personnalisé Power Query pour un description plus complète de `Binary.View` et des fonctions de vue personnalisées.



## Category
Binary
