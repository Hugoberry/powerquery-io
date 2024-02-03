---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Αντικαθιστά τιμές με την παρεχόμενη είσοδο.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Αντικαθιστά την τιμή <code>old</code> στην αρχική <code>value</code> με την τιμή <code>new</code>. Αυτή η συνάρτηση αντικατάστασης μπορεί να χρησιμοποιηθεί στις <code>List.ReplaceValue</code> και <code>Table.ReplaceValue</code>.


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
