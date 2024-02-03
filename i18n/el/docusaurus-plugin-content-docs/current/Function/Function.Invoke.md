---
title: Function.Invoke
---

# Function.Invoke


## Description

Καλεί τη συνάρτηση που δόθηκε


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Καλεί τη συνάρτηση που δόθηκε χρησιμοποιώντας την καθορισμένη λίστα ορισμάτων και επιστρέφει το αποτέλεσμα.


## Examples

### Example #1 
Καλεί την Record.FieldNames με ένα όρισμα [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
