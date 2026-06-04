---
title: List.AnyTrue
---

# List.AnyTrue


Vrne vrednost"true", če je kateri koli izraz"true".


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Vrne vrednost"true", če ja kateri koli izraz na seznamu `list`"true".


## Examples

### Example #1
Ugotovite, ali je kateri od izrazov na seznamu \{true, false, 2 > 0\}"true".
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali je kateri od izrazov na seznamu \{2 = 0, false, 2 &lt; 0\}"true".
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
