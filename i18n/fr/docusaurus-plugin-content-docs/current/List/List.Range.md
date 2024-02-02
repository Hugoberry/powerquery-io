---
title: List.Range
---

# List.Range


## Description

Retourne un sous-ensemble de liste démarrant à un décalage.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Retourne un sous-ensemble de liste démarrant au décalage <code>list</code>. Un paramètre facultatif, <code>offset</code>, définit le nombre maximum d'éléments dans le sous-ensemble.


## Examples

### Example #1 
Recherche le sous-ensemble démarrant au décalage 6 dans la liste des numéros 1 à 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Recherche le sous-ensemble de longueur 2 depuis le décalage 6, à partir de la liste des numéros 1 à 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
