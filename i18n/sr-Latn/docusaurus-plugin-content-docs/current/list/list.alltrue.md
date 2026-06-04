---
title: List.AllTrue
---

# List.AllTrue


Vraća „true“ ako svi izrazi imaju vrednost „true“.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Vraća „true“ ako svi izrazi sa liste `list` imaju vrednost „true“.


## Examples

### Example #1
Utvrđivanje da li svi izrazi sa liste \{true, true, 2 > 0\} imaju vrednost „true“.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Utvrđivanje da li svi izrazi sa liste \{true, true, 2 &lt; 0\} imaju vrednost „true“.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
