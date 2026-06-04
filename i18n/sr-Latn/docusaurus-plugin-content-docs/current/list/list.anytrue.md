---
title: List.AnyTrue
---

# List.AnyTrue


Vraća „true“ ako bilo koji izraz ima vrednost „true“.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Vraća „true“ ako bilo koji izraz sa liste `list` ima vrednost „true“.


## Examples

### Example #1
Utvrđivanje da li bilo koji od izraza sa liste \{true, false, 2 > 0\} ima vrednost „true“.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Utvrđivanje da li bilo koji od izraza sa liste \{2 = 0, false, 2 &lt; 0\} ima vrednost „true“.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
