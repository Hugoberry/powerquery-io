---
title: List.FirstN
---

# List.FirstN


## Description

Retourne le premier jeu d&#39;éléments de la liste en spécifiant le nombre d&#39;éléments à retourner ou une condition éligible.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Si un nombre est spécifié, autant d'éléments sont retournés. </li>  <li>Si une condition est spécifiée, tous les éléments qui satisfont initialement la condition sont retournés. Lorsqu'un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. </li> </ul>


## Examples

### Example #1 
Recherche les valeurs initiales dans la liste \{3, 4, 5, -1, 7, 8, 2} qui sont supérieures à 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
