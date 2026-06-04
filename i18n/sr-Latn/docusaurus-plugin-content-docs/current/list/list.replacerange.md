---
title: List.ReplaceRange
---

# List.ReplaceRange


Zamenjuje „count“ broj vrednosti počev od položaja sa vrednostima za zamenu.


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

Zamenjuje `count` vrednosti u `list` listom `replaceWith`, počev od navedenog položaja, `index`.


## Examples

### Example #1
Zamena \{7, 8, 9\} na listi \{1, 2, 7, 8, 9, 5\} sa \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
