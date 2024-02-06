---
title: Function.Invoke
---

# Function.Invoke


Richiama la funzione specificata


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Richiama la funzione specificata utilizzando l'elenco di argomenti specificato e restituisce il risultato.


## Examples

### Example #1 
Invokes Record.FieldNames con un argomento [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
