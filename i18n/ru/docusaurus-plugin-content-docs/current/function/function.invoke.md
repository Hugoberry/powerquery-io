---
title: Function.Invoke
---

# Function.Invoke


Вызывает заданную функцию


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Вызывает данную функцию, используя указанный список аргументов, и возвращает результат.


## Examples

### Example #1 
Вызывает Record.FieldNames с одним аргументом [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
