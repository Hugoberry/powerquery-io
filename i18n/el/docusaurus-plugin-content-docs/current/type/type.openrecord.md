---
title: Type.OpenRecord
---

# Type.OpenRecord


Επιστρέφει μια ανοιχτή έκδοση του τύπου εγγραφής που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη ανοιχτή).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Επιστρέφει μια ανοιχτή έκδοση της εγγραφής `record` `type` που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη ανοιχτή).


## Examples

### Example #1
Δημιουργία μιας ανοιχτής έκδοσης του `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
