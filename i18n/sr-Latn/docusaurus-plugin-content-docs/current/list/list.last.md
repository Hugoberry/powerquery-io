---
title: List.Last
---

# List.Last


Vraća poslednju vrednost sa liste ili navedenu podrazumevanu vrednost ako je lista prazna.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vraća poslednju stavku na navedenoj listi ili opcionalnu podrazumevanu vrednost ako je lista prazna.

-   `list`: Lista za ispitivanje.
-   `defaultValue`: (Opcionalno) Podrazumevana vrednost za vraćanje ako je lista prazna. Ako je lista prazna, a podrazumevana vrednost nije navedena, funkcija vraća `null`.


## Examples

### Example #1
Pronalaženje poslednje vrednosti sa liste \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Pronalaženje poslednje vrednosti sa liste \{\} ili dobijanje vrednosti -1 ako je lista prazna.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
