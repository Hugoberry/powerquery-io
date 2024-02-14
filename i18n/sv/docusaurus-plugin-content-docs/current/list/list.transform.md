---
title: List.Transform
---

# List.Transform


Returnerar en ny lista med värden som beräknats från den här listan.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Returnerar en ny lista med värden genom att köra transform-funktionen <code>transform</code> på listan, <code>list</code>.


## Examples

### Example #1 
Addera 1 till varje värde i listan \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
