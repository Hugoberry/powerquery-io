---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Retourne true si la fonction de condition est satisfaite par toutes les valeurs dans la liste.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Retourne <code>true</code> si la fonction de condition <code>condition</code> est satisfaite par toutes les valeurs dans la liste <code>list</code>, sinon retourne <code>false</code>.


## Examples

### Example #1 
Détermine si toutes les valeurs initiales dans la liste \{11, 12, 13} sont supérieures à 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si toutes les valeurs initiales dans la liste \{1, 2, 3} sont supérieures à 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
