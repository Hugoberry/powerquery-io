---
title: List.Transform
---

# List.Transform


Vrátí nový seznam hodnot vypočítaný z tohoto seznamu.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Vrátí nový seznam hodnot na základě použití transformační funkce `transform` se seznamem `list`.


## Examples

### Example #1
Přičte 1 ke každé hodnotě v seznamu \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
