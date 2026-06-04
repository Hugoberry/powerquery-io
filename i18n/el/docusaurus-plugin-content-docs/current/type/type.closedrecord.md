---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Επιστρέφει μια κλειστή έκδοση του τύπου εγγραφής που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη κλειστή).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Επιστρέφει μια κλειστή έκδοση της εγγραφής `record` `type` που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη κλειστή).


## Examples

### Example #1
Create a closed version of `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
