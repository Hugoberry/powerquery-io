---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Devolve verdadeiro se todos os valores da lista satisfán á función de condición.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Devolve <code>true</code> se todos os valores da lista <code>list</code> satisfán á función de condición, <code>condition</code>, se non, devolve <code>false</code>.


## Examples

### Example #1 
Determinar se todos os valores da lista \{11, 12, 13} son maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se todos os valores da lista \{1, 2, 3} son maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
