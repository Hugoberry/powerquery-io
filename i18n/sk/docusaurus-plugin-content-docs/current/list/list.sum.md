---
title: List.Sum
---

# List.Sum


Vráti súčet položiek v zozname.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vráti súčet hodnôt rôznych od null v zozname `list`. Vráti hodnotu null, ak sa v zozname nenachádzajú žiadne hodnoty rôzne od null.


## Examples

### Example #1
Nájdite súčet čísel v zozname `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
