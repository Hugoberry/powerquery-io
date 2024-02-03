---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Zamenja število vrednosti z začetkom na položaju z nadomestnimi vrednostmi.


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

Zamenja <code>count</code> vrednosti na seznamu <code>list</code> s seznamom <code>replaceWith</code> z začetkom na navedenem položaju, <code>index</code>.


## Examples

### Example #1 
Zamenjajte \{7, 8, 9} na seznamu \{1, 2, 7, 8, 9, 5} s \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
