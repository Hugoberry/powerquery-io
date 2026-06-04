---
title: List.Transform
---

# List.Transform


Vraća novu listu vrednosti izračunatih na osnovu ove liste.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Vraća novu listu vrednosti primenom funkcije transformacije `transform` na listu, `list`.


## Examples

### Example #1
Dodavanje 1 svakoj vrednosti sa liste \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
