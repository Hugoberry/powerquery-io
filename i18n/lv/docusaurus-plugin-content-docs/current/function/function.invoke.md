---
title: Function.Invoke
---

# Function.Invoke


Tiek izsaukta norādītā funkcija.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Tiek izsaukta norādītā funkcija, izmantojot norādīto argumentu sarakstu, un tiek atgriezts rezultāts.


## Examples

### Example #1
Tiek izsaukta funkcija Record.FieldNames ar vienu argumentu \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
