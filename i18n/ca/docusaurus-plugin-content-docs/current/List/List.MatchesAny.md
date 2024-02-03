---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Retorna el valor true si qualsevol valor satisfà la funció de condició.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Retorna el valor <code>true</code> si qualsevol dels valors de la llista <code>list</code> satisfà la funció de condició, <code>condition</code>, altrament, retorna <code>false</code>.


## Examples

### Example #1 
Troba si qualsevol dels valors de la llista \{9, 10, 11} és més gran que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Troba si qualsevol dels valors de la llista \{1, 2, 3} és més gran que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
