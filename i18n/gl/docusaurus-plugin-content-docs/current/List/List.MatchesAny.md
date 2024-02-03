---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Devolve verdadeiro se un valor satisfai á función de condición.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Devolve <code>true</code> se un dos valores da lista <code>list</code> satisfai á función de condición <code>condition</code>, se non, devolve <code>false</code>.


## Examples

### Example #1 
Buscar se un dos valores iniciais da lista \{9, 10, 11} é maior que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Buscar se un dos valores iniciais da lista \{1, 2, 3} é maior que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
