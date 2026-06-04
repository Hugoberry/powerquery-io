---
title: List.AnyTrue
---

# List.AnyTrue


Devolve verdadeiro se calquera expresión é verdadeira.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Devolve verdadeiro se calquera expresión da lista `list` é verdadeira.


## Examples

### Example #1
Determinar se calquera das expresións da lista \{true, false, 2 > 0\} son verdadeiras.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Determinar se calquera das expresións da lista \{2 = 0, false, 2 &lt; 0\} son verdadeiras.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
