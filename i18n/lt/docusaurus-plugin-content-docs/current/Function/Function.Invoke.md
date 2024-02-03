---
title: Function.Invoke
---

# Function.Invoke


## Description

Iškviečiama nurodyta funkcija


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Iškviečiama pateikta funkcija, naudojant nurodytą argumentų sąrašą, ir pateikiamas rezultatas.


## Examples

### Example #1 
Iškviečiama Record.FieldNames su vienu argumentu [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
