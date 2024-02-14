---
title: List.Reverse
---

# List.Reverse


Vender om på rækkefølgen af værdier på listen.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Returnerer en liste over værdierne på listen <code>list</code> i omvendt rækkefølge.


## Examples

### Example #1 
Opret en liste ud fra \{1..10} i omvendt rækkefølge.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
