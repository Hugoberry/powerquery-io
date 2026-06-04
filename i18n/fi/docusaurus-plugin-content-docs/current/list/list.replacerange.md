---
title: List.ReplaceRange
---

# List.ReplaceRange


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


## Remarks

Korvaa `count` arvoa kohteessa `list` luettelon `replaceWith` arvoilla alkaen määritetystä sijainnista `index`.


## Examples

### Example #1
Korvaa \{7, 8, 9\} luettelossa \{1, 2, 7, 8, 9, 5\} arvoilla \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
