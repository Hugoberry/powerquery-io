---
title: List.First
---

# List.First


## Description

Vraća prvu vrednost sa liste ili navedenu podrazumevanu vrednost ako je lista prazna.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vraća prvu stavku sa liste <code>list</code> ili opcionalnu podrazumevanu vrednost, <code>defaultValue</code>, ako je lista prazna.    Ako je lista prazna i podrazumevana vrednost nije navedena, funkcija vraća <code>null</code>.


## Examples

### Example #1 
Pronalaženje prve vrednosti sa liste \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Pronalaženje prve vrednosti sa liste \{}. Ako je lista prazna, vraća se -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
