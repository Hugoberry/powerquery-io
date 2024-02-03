---
title: List.Select
---

# List.Select


## Description

Vraća listu vrednosti koje se podudaraju sa uslovom.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Vraća listu vrednosti sa liste <code>list</code>, koje se podudaraju sa uslovom izbora <code>selection</code>.


## Examples

### Example #1 
Pronalaženje vrednosti sa liste \{1, -3, 4, 9, -2} koje su veće od 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
