---
title: List.LastN
---

# List.LastN


Renvoie la liste du ou des derniers éléments de la liste spécifiée. Il est possible de spécifier, en option, le nombre de valeurs à renvoyer ou une condition d'admissibilité.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Renvoie une liste du dernier élément ou des derniers éléments de la liste spécifiée.

-   `list` : La liste à examiner. Si la liste est vide, une liste vide est renvoyée.
-   `countOrCondition` : (Facultatif) Prend en charge la collecte de plusieurs éléments ou le filtrage d'éléments. Bien que ce paramètre soit indiqué comme facultatif, une erreur survient si cette valeur n'est pas fournie ou est `null`. Ce paramètre peut être spécifié de deux manières :
    -   Si un nombre est spécifié, jusqu'à ce nombre d'éléments sont renvoyés.
    -   Si une condition est spécifiée, tous les éléments qui satisfont à cette condition sont renvoyés, en commençant par la fin de la liste. Dès qu'un élément ne satisfait pas à la condition, aucun autre élément n'est pris en considération.


## Examples

### Example #1
Recherche la dernière valeur dans la liste \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Recherche les dernières valeurs dans la liste \{3, 4, 5, -1, 7, 8, 2\} qui sont supérieures à 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
