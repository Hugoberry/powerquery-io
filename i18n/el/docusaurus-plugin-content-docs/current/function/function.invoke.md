---
title: Function.Invoke
---

# Function.Invoke


Invokes the given function.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Καλεί τη συνάρτηση που δόθηκε χρησιμοποιώντας την καθορισμένη λίστα ορισμάτων και επιστρέφει το αποτέλεσμα.


## Examples

### Example #1
Invokes Record.FieldNames with one argument \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
