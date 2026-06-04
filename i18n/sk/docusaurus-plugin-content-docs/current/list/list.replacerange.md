---
title: List.ReplaceRange
---

# List.ReplaceRange


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


## Remarks

Nahradí počet hodnôt: `count` v zozname `list` zoznamom `replaceWith`, počnúc od stanovenej pozície `index`.


## Examples

### Example #1
Nahraďte zoznam \{7, 8, 9\} v zozname \{1, 2, 7, 8, 9, 5\} zoznamom \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
