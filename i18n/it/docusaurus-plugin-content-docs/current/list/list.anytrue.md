---
title: List.AnyTrue
---

# List.AnyTrue


Restituisce true se un'espressione è true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Restituisce true se qualsiasi espressione dell'elenco `list` è true.


## Examples

### Example #1
Determina se una delle espressioni dell'elenco \{true, false, 2 > 0\} è true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Determina se una delle espressioni dell'elenco \{2 = 0, false, 2 &lt; 0\} è true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
