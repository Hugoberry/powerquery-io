---
title: List.RemoveNulls
---

# List.RemoveNulls


Fjerner alle værdier fra den angivne liste, som ikke er null.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Fjerner alle forekomster af de værdier, der ikke er null, i <code>list</code>. Hvis der ikke findes værdier, som ikke er null, på listen, returneres den oprindelige liste.


## Examples

### Example #1 
Fjern de værdier, som ikke er null, fra listen \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
