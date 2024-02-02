---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Crée une fonction scalaire sur une fonction vectorielle, avec traitement par lot de plusieurs appels.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Retourne une fonction scalaire de type <code>scalarFunctionType</code> qui appelle <code>vectorFunction</code> avec une seule ligne d'arguments et retourne sa sortie unique. Quand la fonction scalaire est appliquée à plusieurs reprises pour chaque ligne d'une table d'entrées, comme dans Table.AddColumn, <code>vectorFunction</code> est appliqué à la place, une fois pour toutes les entrées.<br />Une table dont les colonnes correspondent en termes de nom et de position aux paramètres de <code>scalarFunctionType</code> est passée à <code>vectorFunction</code>. Chaque ligne de cette table contient les arguments d'un appel à la fonction scalaire, les colonnes correspondant aux paramètres de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> doit retourner une liste de la même longueur que la table d'entrée, dont l'élément à chaque position doit correspondre au résultat de l'évaluation de la fonction scalaire sur la ligne d'entrée à la même position.<br />Comme il est prévu que la table d'entrée soit fournie en streaming, <code>vectorFunction</code> est censé diffuser en streaming sa sortie à mesure que les entrées arrivent (celles-ci étant traitées un bloc à la fois). Notez que <code>vectorFunction</code> ne doit énumérer sa table d'entrée qu'une seule fois.<br />



## Category
Function
