---
title: List.Reverse
---

# List.Reverse


Obrće redosled vrednosti na listi.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Vraća listu vrednosti sa liste `list` u obrnutom redosledu.


## Examples

### Example #1
Kreiranje liste od \{1..10\} u obrnutom redosledu.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
