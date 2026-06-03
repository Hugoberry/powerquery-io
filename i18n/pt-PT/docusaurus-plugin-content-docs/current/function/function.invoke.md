---
title: Function.Invoke
---

# Function.Invoke


Invoque a função indicada.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Invoca a função especificada utilizando a lista de argumentos especificada e devolve o resultado.


## Examples

### Example #1
Invoque Record.FieldNames com um argumento \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
