---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Retourne une liste qui ignore le nombre spécifié d'éléments au début de la liste.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retourne une liste qui supprime le premier élément de la liste `list`. Si `list` est une liste vide, une liste vide est retournée. Cette fonction prend un paramètre facultatif, `countOrCondition`, pour prendre en charge la suppression de plusieurs valeurs, comme indiqué ci-dessous.

-   Si un nombre est spécifié, un nombre d’éléments inférieur ou égal sont supprimés.
-   Si une condition est spécifiée, tous les éléments correspondants consécutifs au début de `list` sont supprimés.
-   Si ce paramètre est nul, le comportement par défaut est observé.


## Examples

### Example #1
Crée une liste à partir de \{1, 2, 3, 4, 5\} sans les 3 premiers nombres.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Crée une liste à partir de \{5, 4, 2, 6, 1\} qui démarre par un nombre inférieur à 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
