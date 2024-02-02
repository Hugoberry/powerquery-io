---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Crée une fonction pouvant être interceptée par un gestionnaire défini sur une vue (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Crée une fonction de vue basée sur <code>function</code> qui peut être gérée dans une vue créée par <code>Table.View</code>.<br />Le gestionnaire <code>OnInvoke</code> de <code>Table.View</code> peut être utilisé pour définir un gestionnaire pour la fonction de vue.<br />Comme avec les gestionnaires pour les opérations intégrées, si aucun gestionnaire <code>OnInvoke</code> n'est spécifié, ou s'il ne gère pas la fonction de vue, ou si une erreur est déclenchée par le gestionnaire, <code>function</code> est appliqué au-dessus de la vue.<br />Référez-vous à la documentation publiée du connecteur personnalisé Power Query pour une description plus complète de <code>Table.View</code> et des fonctions de vue personnalisées.<br />



## Category
Table.Table construction
