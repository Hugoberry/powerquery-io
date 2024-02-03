---
title: Function.Invoke
---

# Function.Invoke


## Description

Zavolá předanou funkci.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Zavolá předanou funkci s předaným seznamem argumentů a vrátí výsledek.


## Examples

### Example #1 
Zavolá funkci Record.FieldNames s jedním argumentem [A=1,B=2].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
