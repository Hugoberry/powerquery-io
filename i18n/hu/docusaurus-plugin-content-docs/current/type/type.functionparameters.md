---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Egy function típus paramétereinek nevéből álló rekord visszaadása. A rekord mezőinek értéke a paraméterek típusával azonos.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

A(z) `type` paraméterben megadott függvény típusú konstrukció paramétereinek nevéből álló rekord visszaadása. A rekord mezőinek értéke a paraméterek típusával azonos.


## Examples

### Example #1
Az `(x as number, y as text)` függvény paramétertípusainak megkeresése.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
