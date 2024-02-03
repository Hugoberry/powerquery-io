---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Vrátí hodnotu True, pokud funkci podmínky splňují všechny hodnoty v seznamu.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Vrátí hodnotu <code>true</code>, pokud funkci podmínky <code>condition</code> splňují všechny hodnoty v seznamu <code>list</code>, jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Určí, zda jsou všechny hodnoty v seznamu \{11, 12, 13} větší než 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Určí, zda jsou všechny hodnoty v seznamu \{1, 2, 3} větší než 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
