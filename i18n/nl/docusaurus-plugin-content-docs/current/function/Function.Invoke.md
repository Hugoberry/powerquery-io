---
title: Function.Invoke
---

# Function.Invoke


Roept de opgegeven functie aan


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Roept de opgegeven functie aan met behulp van de opgegeven lijst met argumenten en retourneert het resultaat.


## Examples

### Example #1 
Roept Record.FieldNames aan met één argument [A=1, B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
