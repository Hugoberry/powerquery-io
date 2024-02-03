---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Vraća „true“ ako bilo koji izraz ima vrednost „true“.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Vraća „true“ ako bilo koji izraz sa liste <code>list</code> ima vrednost „true“.


## Examples

### Example #1 
Utvrđivanje da li bilo koji od izraza sa liste \{true, false, 2 &gt; 0} ima vrednost „true“.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Utvrđivanje da li bilo koji od izraza sa liste \{2 = 0, false, 2 &lt; 0} ima vrednost „true“.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
