---
title: List.Transform
---

# List.Transform


Vrne nov seznam vrednosti, izračunanih iz tega seznama.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Vrne nov seznam vrednosti, tako da uporabi funkcijo pretvorbe `transform` za seznam, `list`.


## Examples

### Example #1
Dodajte 1 vsaki vrednosti na seznamu \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
