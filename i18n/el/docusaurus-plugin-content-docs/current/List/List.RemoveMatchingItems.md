---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Καταργεί όλες τις εμφανίσεις των τιμών εισόδου.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Καταργεί όλες τις εμφανίσεις των τιμών που δόθηκαν στην <code>list2</code> από την <code>list1</code>. Εάν οι τιμές της <code>list2</code> δεν υπάρχουν στην <code>list1</code>, επιστρέφεται η αρχική λίστα.    Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5, 5} χωρίς τα \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
