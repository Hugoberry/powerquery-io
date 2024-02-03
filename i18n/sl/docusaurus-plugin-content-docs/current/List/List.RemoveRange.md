---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Odstrani število vrednosti z začetkom na navedenem položaju.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Odstrani <code>count</code> vrednosti na seznamu <code>list</code> z začetkom na navedenem položaju, <code>index</code>.


## Examples

### Example #1 
Odstranite 3 vrednosti na seznamu \{1, 2, 3, 4, -6, -2, -1, 5} z začetkom v indeksu 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
