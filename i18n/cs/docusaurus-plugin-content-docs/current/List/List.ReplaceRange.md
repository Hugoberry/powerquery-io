---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Nahradí určený počet hodnot počínaje určenou pozicí nahrazujícími hodnotami.


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

Nahradí <code>count</code> hodnoty v seznamu <code>list</code> seznamem <code>replaceWith</code> počínaje určenou pozicí <code>index</code>.


## Examples

### Example #1 
V seznamu \{1, 2, 7, 8, 9, 5} nahradí hodnoty \{7, 8, 9} hodnotami \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
