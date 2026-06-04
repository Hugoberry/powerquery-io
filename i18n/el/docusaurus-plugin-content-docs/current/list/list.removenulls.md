---
title: List.RemoveNulls
---

# List.RemoveNulls


Καταργεί όλες τις τιμές "null" από την καθορισμένη λίστα.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Καταργεί όλες τις εμφανίσεις των τιμών "null" στην `list`. Εάν δεν υπάρχουν τιμές "null" στη λίστα, επιστρέφεται η αρχική λίστα.


## Examples

### Example #1
Καταργήστε τις τιμές "null" από τη λίστα \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
