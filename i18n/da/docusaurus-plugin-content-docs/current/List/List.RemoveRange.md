---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Fjerner antallet af talte værdier med start ved den angivne position.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Fjerner <code>count</code> værdier i <code>list</code> med start ved den angivne position, <code>index</code>.


## Examples

### Example #1 
Fjerner 3 værdier på listen \{1, 2, 3, 4, -6, -2, -1, 5} med start ved indeks 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
