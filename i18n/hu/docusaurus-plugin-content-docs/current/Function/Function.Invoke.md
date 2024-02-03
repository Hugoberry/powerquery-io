---
title: Function.Invoke
---

# Function.Invoke


## Description

Meghívja az adott függvényt.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Meghívja az adott függvényt a megadott argumentumok listájának használatával, és visszaadja az eredményt.


## Examples

### Example #1 
A Record.FieldNames függvény meghívása egy argumentummal [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
