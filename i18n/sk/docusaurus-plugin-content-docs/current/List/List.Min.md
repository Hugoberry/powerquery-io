---
title: List.Min
---

# List.Min


## Description

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


## Details

Vráti minimálnu položku v zozname <code>list</code> alebo voliteľnú predvolenú hodnotu <code>default</code>, ak je zoznam prázdny.    Možno stanoviť voliteľnú hodnotu comparisonCriteria <code>comparisonCriteria</code> s cieľom určiť spôsob porovnania položiek v zozname. Ak má tento parameter hodnotu null, použije sa predvolený porovnávač.


## Examples

### Example #1 
Nájdite minimum v zozname \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Nájdite minimum v zozname \{} alebo vráťte hodnotu –1, ak je zoznam prázdny. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
