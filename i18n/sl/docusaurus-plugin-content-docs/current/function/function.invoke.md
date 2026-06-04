---
title: Function.Invoke
---

# Function.Invoke


Prikliče dano funkcijo.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Prikliče dano funkcijo z določenim seznamom argumentov in vrne rezultat.


## Examples

### Example #1
Prikliče Record.FieldNames z enim argumentom \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
