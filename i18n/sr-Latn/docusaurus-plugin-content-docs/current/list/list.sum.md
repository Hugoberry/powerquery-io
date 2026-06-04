---
title: List.Sum
---

# List.Sum


Vraća zbir stavki na listi.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vraća zbir vrednosti sa liste, `list`, koje nisu bez vrednosti. Vraća rezultat bez vrednosti ako na listi nema vrednosti koje nisu bez vrednosti.


## Examples

### Example #1
Pronalaženje zbira brojeva sa liste `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
