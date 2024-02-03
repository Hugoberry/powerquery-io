---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Αντικαθιστά το πλήθος των τιμών που ξεκινούν από την καθορισμένη θέση με τις τιμές αντικατάστασης.


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

Αντικαθιστά <code>count</code> τιμές από τη λίστα <code>list</code> με τη λίστα <code>replaceWith</code>, ξεκινώντας από την καθορισμένη θέση, <code>index</code>.


## Examples

### Example #1 
Αντικαταστήστε τις τιμές \{7, 8, 9} στη λίστα \{1, 2, 7, 8, 9, 5} με τις τιμές \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
