---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Καταργεί τα στοιχεία από τη λίστα1 που υπάρχουν στη λίστα.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Καταργεί όλες τις εμφανίσεις των τιμών που δόθηκαν στην <code>list2</code> από την <code>list1</code>. Εάν οι τιμές της <code>list2</code> δεν υπάρχουν στην <code>list1</code>, επιστρέφεται η αρχική λίστα.


## Examples

### Example #1 
Καταργήστε τα στοιχεία της λίστας \{2, 4, 6} από τη λίστα \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
