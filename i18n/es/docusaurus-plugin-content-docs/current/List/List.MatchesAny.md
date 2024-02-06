---
title: List.MatchesAny
---

# List.MatchesAny


Devuelve true si algún valor satisface la función de la condición.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Devuelve <code>true</code> si alguno de los valores de la lista <code>list</code> satisfacen la función de la condición, <code>condition</code>; de lo contrario, devuelve <code>false</code>.


## Examples

### Example #1 
Buscar si alguno de los valores de la lista \{9, 10, 11} son mayores que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si alguno de los valores de la lista \{1, 2, 3} son mayores que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
