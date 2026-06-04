---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Καταργεί όλες τις εμφανίσεις των τιμών εισόδου.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Καταργεί όλες τις εμφανίσεις των τιμών που δόθηκαν στην `list2` από την `list1`. Εάν οι τιμές της `list2` δεν υπάρχουν στην `list1`, επιστρέφεται η αρχική λίστα. Μια προαιρετική τιμή κριτηρίων ισότητας, `equationCriteria`, μπορεί να καθοριστεί για τον έλεγχο ισότητας.


## Examples

### Example #1
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5, 5\} χωρίς τα \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
