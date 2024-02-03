---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Retornará true se a função condition for atendida por todos os valores da lista.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Retornará <code>true</code> se a função condition <code>condition</code> for atendida por todos os valores da lista <code>list</code>; do contrário, <code>false</code> será retornado.


## Examples

### Example #1 
Determine se todos os valores da lista \{11, 12, 13} serão maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determine se todos os valores da lista \{1, 2, 3} serão maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
