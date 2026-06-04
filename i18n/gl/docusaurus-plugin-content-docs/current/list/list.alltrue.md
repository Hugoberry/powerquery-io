---
title: List.AllTrue
---

# List.AllTrue


Devolve verdadeiro se todas as expresións son verdadeiras.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Devolve verdadeiro se todas as expresións da lista `list` son verdadeiras.


## Examples

### Example #1
Determinar se todas as expresións da lista \{true, true, 2 > 0\} son verdadeiras.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Determinar se todas as expresións da lista \{true, true, 2 &lt; 0\} son verdadeiras.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
