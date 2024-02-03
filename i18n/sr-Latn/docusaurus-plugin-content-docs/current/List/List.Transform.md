---
title: List.Transform
---

# List.Transform


## Description

Vraća novu listu vrednosti izračunatih na osnovu ove liste.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Vraća novu listu vrednosti primenom funkcije transformacije <code>transform</code> na listu, <code>list</code>.


## Examples

### Example #1 
Dodavanje 1 svakoj vrednosti sa liste \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
