---
title: List.Max
---

# List.Max


## Description

Vraća maksimalnu ili podrazumevanu vrednost za praznu listu.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Vraća maksimalnu stavku sa liste <code>list</code> ili opcionalnu podrazumevanu vrednost <code>default</code> ako je lista prazna.    Može se navesti opcionalna vrednost comparisonCriteria, <code>comparisonCriteria</code>, da bi se odredilo kako će se porediti stavke sa liste. Ako je ovaj parametar bez vrednosti, koristi se podrazumevani upoređivač.


## Examples

### Example #1 
Pronalaženje maksimuma na listi \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Pronalaženje maksimuma na listi \{} ili vraćanje vrednosti -1 ako je lista prazna. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
