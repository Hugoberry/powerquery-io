---
title: Function.Invoke
---

# Function.Invoke


## Description

Poziva datu funkciju


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Poziva datu funkciju pomoću navedene liste argumenata i vraća rezultat.


## Examples

### Example #1 
Poziva Record.FieldNames pomoću jednog argumenta [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
