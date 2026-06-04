---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Αντικαθιστά τιμές με την παρεχόμενη είσοδο.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Αντικαθιστά την τιμή `old` στην αρχική `value` με την τιμή `new`. Αυτή η συνάρτηση αντικατάστασης μπορεί να χρησιμοποιηθεί στις `List.ReplaceValue` και `Table.ReplaceValue`.


## Examples

### Example #1
Αντικαταστήστε την τιμή 11 με την τιμή 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
