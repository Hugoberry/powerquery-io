---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Uklanja sve vrednosti „bez vrednosti“ iz navedene liste.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Uklanja sva pojavljivanja vrednosti „bez vrednosti“ u <code>list</code>. Ako na listi ne postoje vrednosti „bez vrednosti“, vraća se prvobitna lista.


## Examples

### Example #1 
Uklanjanje vrednosti „bez vrednosti“ iz liste \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
