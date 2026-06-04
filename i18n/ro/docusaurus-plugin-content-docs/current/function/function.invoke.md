---
title: Function.Invoke
---

# Function.Invoke


Invocă funcția dată.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Invocă funcţia dată utilizând lista de argumente specificată şi returnează rezultatul.


## Examples

### Example #1
Invocă Record.FieldNames cu un argument \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
