---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Odebere počet hodnot počínaje na určené pozici.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Odebere <code>count</code> hodnot seznamu <code>list</code> počínaje na zadané pozici <code>index</code>.


## Examples

### Example #1 
Odebere 3 hodnoty seznamu \{1, 2, 3, 4, -6, -2, -1, 5} počínaje indexem 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
