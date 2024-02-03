---
title: List.Reverse
---

# List.Reverse


## Description

Obrátí pořadí hodnot v seznamu.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Vrátí seznam hodnot v seznamu <code>list</code> v obráceném pořadí.


## Examples

### Example #1 
Vytvoří ze seznamu \{1..10} seznam s obráceným pořadím hodnot.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
