---
title: Function.Invoke
---

# Function.Invoke


Wywołuje daną funkcję


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Wywołuje daną funkcję przy użyciu określonej listy argumentów i zwraca wynik.


## Examples

### Example #1 
Wywołuje funkcję Record.FieldNames z jednym argumentem [A=1,B=2].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
