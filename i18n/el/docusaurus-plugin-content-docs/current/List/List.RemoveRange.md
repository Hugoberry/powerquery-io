---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Καταργεί το πλήθος των τιμών που ξεκινούν από την καθορισμένη θέση.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Καταργεί <code>count</code> τιμές από τη λίστα <code>list</code> που ξεκινούν από την καθορισμένη θέση, <code>index</code>.


## Examples

### Example #1 
Καταργήστε 3 τιμές από τη λίστα \{1, 2, 3, 4, -6, -2, -1, 5} ξεκινώντας από τον δείκτη 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
