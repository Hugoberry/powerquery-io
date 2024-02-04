---
title: List.AllTrue
---

# List.AllTrue


## Description

Devolve true se todas as expressões forem verdadeiras.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Devolve true se todas as expressões existentes na lista <code>list</code> forem verdadeiras.


## Examples

### Example #1 
Determinar se todas as expressões existentes na lista \{true, true, 2 &gt; 0} são verdadeiras.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se todas as expressões existentes na lista \{true, true, 2 &lt; 0} são verdadeiras.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
