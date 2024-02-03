---
title: Function.Invoke
---

# Function.Invoke


## Description

Викликає задану функцію


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Викликає задану функцію за допомогою вказаного списку аргументів і повертає результат.


## Examples

### Example #1 
Викликає Record.FieldNames з одним аргументом [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
