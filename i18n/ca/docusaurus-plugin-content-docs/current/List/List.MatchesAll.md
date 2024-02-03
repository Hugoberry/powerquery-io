---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Retorna el valor true si tots els valors de la llista satisfan la funció de condició.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Retorna el valor <code>true</code> si tots els valors de la llista <code>list</code> satisfan la funció de condició, <code>condition</code>, altrament, retorna <code>false</code>.


## Examples

### Example #1 
Determina si tots els valors de la llista \{11, 12, 13} són més grans que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determina si tots els valors de la llista \{1, 2, 3} són més grans que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
