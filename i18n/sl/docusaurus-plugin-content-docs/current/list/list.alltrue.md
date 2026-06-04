---
title: List.AllTrue
---

# List.AllTrue


Vrne vrednost"true", če so vsi izrazi"true".


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Vrne vrednost"true", če so vsi izrazi na seznamu `list`"true".


## Examples

### Example #1
Ugotovite, ali so vsi izrazi na seznamu \{true, true, 2 > 0\}"true".
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali so vsi izrazi na seznamu \{true, true, 2 &lt; 0\}"true".
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
