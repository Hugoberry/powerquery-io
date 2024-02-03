---
title: List.Last
---

# List.Last


## Description

Vraća poslednju vrednost sa liste ili navedenu podrazumevanu vrednost ako je lista prazna.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vraća poslednju stavku sa liste <code>list</code> ili opcionalnu podrazumevanu vrednost, <code>defaultValue</code>, ako je lista prazna.    Ako je lista prazna i podrazumevana vrednost nije navedena, funkcija vraća <code>null</code>.


## Examples

### Example #1 
Pronalaženje poslednje vrednosti sa liste \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Pronalaženje poslednje vrednosti sa liste \{} ili dobijanje vrednosti -1 ako je lista prazna.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
