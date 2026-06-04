---
title: List.Transform
---

# List.Transform


Returnează o nouă listă de valori calculate din această listă.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Returnează o nouă listă de valori prin aplicarea funcţiei de transformare `transform` la lista, `list`.


## Examples

### Example #1
Adăugaţi 1 la fiecare valoare din lista \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
