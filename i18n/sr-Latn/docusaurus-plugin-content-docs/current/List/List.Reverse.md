---
title: List.Reverse
---

# List.Reverse


## Description

Obrće redosled vrednosti na listi.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Vraća listu vrednosti sa liste <code>list</code> u obrnutom redosledu.


## Examples

### Example #1 
Kreiranje liste od \{1..10} u obrnutom redosledu.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
