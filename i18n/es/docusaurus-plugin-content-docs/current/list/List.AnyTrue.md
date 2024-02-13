---
title: List.AnyTrue
---

# List.AnyTrue


Devuelve true si alguna expresión es true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Devuelve true si alguna expresión de la lista <code>list</code> es true.


## Examples

### Example #1 
Determina si alguna de las expresiones de la lista \{true, false, 2 &gt; 0} es true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina si alguna de las expresiones de la lista \{2 = 0, false, 2 &lt; 0} es true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
