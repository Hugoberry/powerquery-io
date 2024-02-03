---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Επιστρέφει μια κλειστή έκδοση του τύπου εγγραφής που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη κλειστή).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Επιστρέφει μια κλειστή έκδοση της εγγραφής <code>record</code> <code>type</code> που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη κλειστή).


## Examples

### Example #1 
Δημιουργία μιας κλειστής έκδοσης του &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
