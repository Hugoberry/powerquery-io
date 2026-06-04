---
title: List.RemoveItems
---

# List.RemoveItems


Καταργεί τα στοιχεία από τη λίστα1 που υπάρχουν στη λίστα.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Καταργεί όλες τις εμφανίσεις των τιμών που δόθηκαν στην `list2` από την `list1`. Εάν οι τιμές της `list2` δεν υπάρχουν στην `list1`, επιστρέφεται η αρχική λίστα.


## Examples

### Example #1
Καταργήστε τα στοιχεία της λίστας \{2, 4, 6\} από τη λίστα \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
