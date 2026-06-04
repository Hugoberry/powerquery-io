---
title: List.Reverse
---

# List.Reverse


Obrátí pořadí hodnot v seznamu.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Vrátí seznam hodnot v seznamu `list` v obráceném pořadí.


## Examples

### Example #1
Vytvoří ze seznamu \{1..10\} seznam s obráceným pořadím hodnot.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
