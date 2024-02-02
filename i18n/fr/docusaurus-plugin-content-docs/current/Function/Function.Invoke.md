---
title: Function.Invoke
---

# Function.Invoke


## Description

Appelle la fonction spécifiée


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Appelle la fonction spécifiée avec la liste d'arguments spécifiée et retourne le résultat.


## Examples

### Example #1 
Appelle Record.FieldNames avec un argument [A=1, B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
