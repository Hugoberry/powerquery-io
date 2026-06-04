---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Εφαρμόζει κάθε αντικατάσταση των \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Εκτελεί τις δεδομένες αντικαταστάσεις στη λίστα `list`. Η λειτουργία αντικατάστασης `replacements` αποτελείται από μια λίστα δύο τιμών, την παλιά τιμή και τη νέα τιμή, οι οποίες παρέχονται σε λίστα. Μια προαιρετική τιμή κριτηρίων ισότητας, `equationCriteria`, μπορεί να καθοριστεί για τον έλεγχο ισότητας.


## Examples

### Example #1
Δημιουργήστε μια λίστα από τη λίστα \{1, 2, 3, 4, 5\} αντικαθιστώντας την τιμή 5 με -5 και την τιμή 1 με -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
