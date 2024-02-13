---
title: Function.Invoke
---

# Function.Invoke


Chama a função fornecida


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Chama a função fornecida usando a lista de argumentos especificada e retorna o resultado.


## Examples

### Example #1 
Chama Record.FieldNames com um argumento [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
