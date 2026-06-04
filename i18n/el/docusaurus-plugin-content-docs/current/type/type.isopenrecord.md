---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Υποδεικνύει αν ένας τύπος εγγραφής είναι ανοιχτός.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Επιστρέφει μια λογική τιμή `logical` που υποδεικνύει αν μια εγγραφή `type` είναι ανοιχτή.


## Examples

### Example #1
Προσδιορισμός του κατά πόσο η εγγραφή `type [ A = number, ...]` είναι ανοιχτή.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
