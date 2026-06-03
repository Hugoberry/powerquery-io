---
title: List.RemoveLastN
---

# List.RemoveLastN


Retourne une liste qui supprime le nombre spécifié d'éléments à la fin de la liste.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retourne une liste qui supprime les `countOrCondition` derniers éléments à la fin de la liste `list`. Si `list` a moins de `countOrCondition` éléments, une liste vide est retournée.

-   Si un nombre est spécifié, un nombre d’éléments inférieur ou égal sont supprimés.
-   Si une condition est spécifiée, tous les éléments correspondants consécutifs à la fin de `list` sont supprimés.
-   Si ce paramètre est nul, un seul élément est supprimé.


## Examples

### Example #1
Crée une liste à partir de \{1, 2, 3, 4, 5\} sans les 3 derniers nombres.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Crée une liste à partir de \{5, 4, 2, 6, 4\} qui se termine par un nombre inférieur à 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
