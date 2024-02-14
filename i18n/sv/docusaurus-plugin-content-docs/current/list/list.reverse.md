---
title: List.Reverse
---

# List.Reverse


Byt till omvänd ordning med värden i listan.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Returnerar en lista med värdena i listan <code>list</code> i omvänd ordning.


## Examples

### Example #1 
Skapa en lista från \{1..10} i omvänd ordning.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
