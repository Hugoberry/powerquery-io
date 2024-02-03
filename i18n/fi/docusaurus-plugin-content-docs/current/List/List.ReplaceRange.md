---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Korvaa määritetyn määrän arvoja korvaavilla arvoilla sijainnista alkaen.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Korvaa <code>count</code> arvoa kohteessa <code>list</code> luettelon <code>replaceWith</code> arvoilla alkaen määritetystä sijainnista <code>index</code>.


## Examples

### Example #1 
Korvaa \{7, 8, 9} luettelossa \{1, 2, 7, 8, 9, 5} arvoilla \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
