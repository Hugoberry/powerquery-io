---
title: List.Select
---

# List.Select


## Description

Returnerer en liste over værdier, der opfylder betingelsen.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Returnerer en liste over værdier fra listen <code>list</code>, som opfylder den valgte betingelse <code>selection</code>.


## Examples

### Example #1 
Find de værdier på listen \{1, -3, 4, 9, -2}, der er større end 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
