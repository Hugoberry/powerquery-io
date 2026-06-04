---
title: List.IsDistinct
---

# List.IsDistinct


Navodi da li lista sadrži duplikate.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Vraća logičku vrednost nezavisno od toga da li na listi `list` ima duplikata: vraća `true` ako lista sadrži jedinstvene vrednosti, a `false` ako ima dupliranih vrednosti.


## Examples

### Example #1
Otkrivanje da li lista \{1, 2, 3\} sadrži jedinstvene vrednosti (t.j. da li je bez duplikata).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Otkrivanje da li lista \{1, 2, 3, 3\} sadrži jedinstvene vrednosti (t.j. da li je bez duplikata).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
