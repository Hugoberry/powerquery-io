---
title: List.FirstN
---

# List.FirstN


Retourne le premier jeu d'éléments de la liste en spécifiant le nombre d'éléments à retourner ou une condition éligible.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Si un nombre est spécifié, autant d'éléments sont retournés.
-   Si une condition est spécifiée, tous les éléments qui satisfont initialement la condition sont retournés. Lorsqu'un élément ne remplit pas la condition, aucun autre élément n'est pris en compte.


## Examples

### Example #1
Recherche les valeurs initiales dans la liste \{3, 4, 5, -1, 7, 8, 2\} qui sont supérieures à 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
