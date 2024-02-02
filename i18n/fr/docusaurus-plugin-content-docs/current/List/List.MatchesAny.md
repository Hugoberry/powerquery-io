---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Retourne true si la fonction de condition est satisfaite par une valeur quelconque.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Retourne <code>true</code> si la fonction de condition <code>condition</code> est satisfaite par l'une des valeurs dans la liste <code>list</code>, sinon retourne <code>false</code>.


## Examples

### Example #1 
Détermine si l&#39;une des valeurs dans la liste \{9, 10, 11} est supérieure à 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si l&#39;une des valeurs dans la liste \{1, 2, 3} est supérieure à 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
