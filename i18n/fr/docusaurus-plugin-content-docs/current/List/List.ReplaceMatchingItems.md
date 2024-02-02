---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Applique chaque remplacement de \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Effectue les remplacements spécifiés dans la liste <code>list</code>. Une opération de remplacement <code>replacements</code> comprend une liste de deux valeurs, l'ancienne et la nouvelle valeur, fournies dans une liste.    La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité.


## Examples

### Example #1 
Crée une liste \{1, 2, 3, 4, 5} pour remplacer la valeur 5 par -5, et la valeur 1 par -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
