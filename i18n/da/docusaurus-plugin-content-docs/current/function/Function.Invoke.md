---
title: Function.Invoke
---

# Function.Invoke


Udløser den angivne funktion


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Udløser den angivne funktion ved hjælp af den angivne liste over argumenter og returnerer resultatet.


## Examples

### Example #1 
Udløser Record.FieldNames med ét argument [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
