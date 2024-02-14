---
title: Function.Invoke
---

# Function.Invoke


Anropar angiven funktion


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Anropar angiven funktion baserat på den angivna listan med argument och returnerar resultatet.


## Examples

### Example #1 
Anropar Record.FieldNames med ett argument [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
