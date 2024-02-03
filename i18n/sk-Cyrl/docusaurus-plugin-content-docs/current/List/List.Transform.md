---
title: List.Transform
---

# List.Transform


## Description

Vráti nový zoznam hodnôt vypočítaných z tohto zoznamu.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Vráti nový zoznam hodnôt použitím funkcie transformácie <code>transform</code> na zoznam <code>list</code>.


## Examples

### Example #1 
Pripočíta hodnotu 1 ku každej hodnote v zozname \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
