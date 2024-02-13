---
title: Function.Invoke
---

# Function.Invoke


Invokes the given function


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Invokes the given function using the specified list of arguments and returns the result.


## Examples

### Example #1 
Invokes Record.FieldNames with one argument [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
