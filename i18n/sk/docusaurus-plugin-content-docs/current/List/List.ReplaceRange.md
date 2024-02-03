---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Nahradí počet hodnôt, počnúc od pozície s náhradnými hodnotami.


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

Nahradí počet hodnôt: <code>count</code> v zozname <code>list</code> zoznamom <code>replaceWith</code>, počnúc od stanovenej pozície <code>index</code>.


## Examples

### Example #1 
Nahraďte zoznam \{7, 8, 9} v zozname \{1, 2, 7, 8, 9, 5} zoznamom \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
