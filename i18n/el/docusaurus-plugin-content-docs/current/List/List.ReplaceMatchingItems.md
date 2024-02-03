---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Εφαρμόζει κάθε αντικατάσταση των \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Εκτελεί τις δεδομένες αντικαταστάσεις στη λίστα <code>list</code>. Η λειτουργία αντικατάστασης <code>replacements</code> αποτελείται από μια λίστα δύο τιμών, την παλιά τιμή και τη νέα τιμή, οι οποίες παρέχονται σε λίστα.    Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας.


## Examples

### Example #1 
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5} αντικαθιστώντας την τιμή 5 με -5 και την τιμή 1 με -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
