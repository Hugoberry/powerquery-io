---
title: Function.Invoke
---

# Function.Invoke


Vyvolá předanou funkci.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Zavolá předanou funkci s předaným seznamem argumentů a vrátí výsledek.


## Examples

### Example #1
Vyvolá funkci Record.FieldNames s jedním argumentem \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
