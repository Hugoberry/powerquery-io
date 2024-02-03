---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Επιστρέφει μια ανοιχτή έκδοση του τύπου εγγραφής που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη ανοιχτή).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Επιστρέφει μια ανοιχτή έκδοση της εγγραφής <code>record</code> <code>type</code> που έχετε εισάγει (ή τον ίδιο τύπο αν είναι ήδη ανοιχτή).


## Examples

### Example #1 
Δημιουργία μιας ανοιχτής έκδοσης του &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
