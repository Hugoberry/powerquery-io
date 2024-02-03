---
title: Function.Invoke
---

# Function.Invoke


## Description

Invoca a función indicada


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Invoca a función indicada utilizando a lista de argumentos especificada e devolve o resultado.


## Examples

### Example #1 
Invoca Record.FieldNames cun argumento [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
