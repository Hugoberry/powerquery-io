---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Poistaa määritetyn määrän määritetystä sijainnista alkavia arvoja.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Poistaa <code>count</code> arvoa kohteesta <code>list</code> alkaen määritetystä sijainnista <code>index</code>.


## Examples

### Example #1 
Poistaa kolme arvoa luettelosta \{1, 2, 3, 4, -6, -2, -1, 5} alkaen indeksistä 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
