---
title: List.Min
---

# List.Min


Vráti minimálnu hodnotu alebo predvolenú hodnotu pre prázdny zoznam.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Vráti minimálnu položku v zozname `list` alebo voliteľnú predvolenú hodnotu `default`, ak je zoznam prázdny. Možno stanoviť voliteľnú hodnotu comparisonCriteria `comparisonCriteria` s cieľom určiť spôsob porovnania položiek v zozname. Ak má tento parameter hodnotu null, použije sa predvolený porovnávač.


## Examples

### Example #1
Nájdite minimum v zozname \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Nájdite minimum v zozname \{\} alebo vráťte hodnotu –1, ak je zoznam prázdny.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
