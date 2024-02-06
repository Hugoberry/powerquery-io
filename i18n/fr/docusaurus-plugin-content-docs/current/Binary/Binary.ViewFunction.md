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

Crée une fonction d’affichage basée sur <code>function</code> qui peut être gérée dans une vue créée par <code>Binary.View</code>.<br />Le gestionnaire <code>OnInvoke</code> de <code>Binary.View</code> peut être utilisé pour définir un gestionnaire pour la fonction de vue.<br />Comme avec les gestionnaires pour les opérations intégrées, si aucun gestionnaire <code>OnInvoke</code> n’est spécifié, s’il ne gère pas la fonction de vue, ou si une erreur est déclenchée par le gestionnaire, <code>function</code> est appliqué au-dessus de la vue.<br />Referez-vous à la documentation publiée du connecteur personnalisé Power Query pour un description plus complète de <code>Binary.View</code> et des fonctions de vue personnalisées.<br />



## Category
Binary
