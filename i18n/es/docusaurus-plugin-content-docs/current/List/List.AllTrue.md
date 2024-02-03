---
title: List.AllTrue
---

# List.AllTrue


## Description

Devuelve True si todas las expresiones son True.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Devuelve True si todas las expresiones de la lista <code>list</code> son True.


## Examples

### Example #1 
Determina si todas las expresiones de la lista \{true, true, 2 &gt; 0} son True.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina si todas las expresiones de la lista \{true, true, 2 &lt; 0} son True.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
