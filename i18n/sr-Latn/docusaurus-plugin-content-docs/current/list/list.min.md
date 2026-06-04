---
title: List.Min
---

# List.Min


Vraća minimalnu ili podrazumevanu vrednost za praznu listu.


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

Vraća minimalnu stavku sa liste `list` ili opcionalnu podrazumevanu vrednost `default` ako je lista prazna. Može se navesti opcionalna vrednost comparisonCriteria, `comparisonCriteria`, da bi se odredilo kako će se porediti stavke sa liste. Ako je ovaj parametar bez vrednosti, koristi se podrazumevani upoređivač.


## Examples

### Example #1
Pronalaženje minimuma na listi \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Pronalaženje minimuma na listi \{\} ili vraćanje vrednosti -1 ako je lista prazna.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
