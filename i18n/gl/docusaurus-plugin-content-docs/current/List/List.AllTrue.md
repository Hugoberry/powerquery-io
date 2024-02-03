---
title: List.AllTrue
---

# List.AllTrue


## Description

Devolve verdadeiro se todas as expresións son verdadeiras.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Devolve verdadeiro se todas as expresións da lista <code>list</code> son verdadeiras.


## Examples

### Example #1 
Determinar se todas as expresións da lista \{true, true, 2 &gt; 0} son verdadeiras.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se todas as expresións da lista \{true, true, 2 &lt; 0} son verdadeiras.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
