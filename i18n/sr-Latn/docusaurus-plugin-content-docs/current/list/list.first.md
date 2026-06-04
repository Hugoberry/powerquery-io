---
title: List.First
---

# List.First


Vraća prvu vrednost sa liste ili navedenu podrazumevanu vrednost ako je lista prazna.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vraća prvu stavku sa liste `list` ili opcionalnu podrazumevanu vrednost, `defaultValue`, ako je lista prazna. Ako je lista prazna i podrazumevana vrednost nije navedena, funkcija vraća `null`.


## Examples

### Example #1
Pronalaženje prve vrednosti sa liste \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Pronalaženje prve vrednosti sa liste \{\}. Ako je lista prazna, vraća se -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
