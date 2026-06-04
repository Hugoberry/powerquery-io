---
title: Function.Invoke
---

# Function.Invoke


Берілген функцияны шақырады.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Көрсетілген функцияны көрсетілген аргументтер тізімін пайдаланып шақырады және нәтижені қайтарады.


## Examples

### Example #1
Record.FieldNames функциясын бір \[A=1,B=2\] аргументімен шақырады.
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
