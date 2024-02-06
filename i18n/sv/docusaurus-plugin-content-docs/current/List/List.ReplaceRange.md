---
title: List.ReplaceRange
---

# List.ReplaceRange


Ersätter ett antal värden från angiven position med ersättningsvärdena.


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

Ersätter <code>count</code> värden i <code>list</code> med listan <code>replaceWith</code> med början vid angiven position, <code>index</code>.


## Examples

### Example #1 
Ersätt \{7, 8, 9} i listan \{1, 2, 7, 8, 9, 5} med \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
