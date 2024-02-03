---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Navodi da li lista sadrži duplikate.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Vraća logičku vrednost nezavisno od toga da li na listi <code>list</code> ima duplikata: vraća <code>true</code> ako lista sadrži jedinstvene vrednosti, a <code>false</code> ako ima dupliranih vrednosti. 


## Examples

### Example #1 
Otkrivanje da li lista \{1, 2, 3} sadrži jedinstvene vrednosti (t.j. da li je bez duplikata).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Otkrivanje da li lista \{1, 2, 3, 3} sadrži jedinstvene vrednosti (t.j. da li je bez duplikata).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
