---
title: List.MatchesAll
---

# List.MatchesAll


Devuelve true si todos los valores de la lista satisfacen la función de la condición.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Devuelve <code>true</code> si todos los valores de la lista <code>list</code> satisfacen la función de la condición, <code>condition</code>; de lo contrario, devuelve <code>false</code>.


## Examples

### Example #1 
Determinar si todos los valores de la lista \{11, 12, 13} son mayores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar si todos los valores de la lista \{1, 2, 3} son mayores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
