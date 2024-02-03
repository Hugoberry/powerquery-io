---
title: Function.Invoke
---

# Function.Invoke


## Description

Invoca la funció donada.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Invoca la funció donada mitjançant la llista especificada d'arguments i retorna el resultat.


## Examples

### Example #1 
Invoca Record.FieldNames amb un únic argument [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
