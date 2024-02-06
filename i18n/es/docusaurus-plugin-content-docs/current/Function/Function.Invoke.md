---
title: Function.Invoke
---

# Function.Invoke


Invoca la función dada


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Invoca la función especificada con la lista especificada de argumentos y devuelve el resultado.


## Examples

### Example #1 
Invoca Record.FieldNames con un argumento [A=1, B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
