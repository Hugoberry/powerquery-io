---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Pateikiamas įrašas, kurio laukų reikšmės yra funkcijos tipo parametrų pavadinimai ir nustatytos atitinkamos tipų reikšmės.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Pateikiamas įrašas, kurio laukų reikšmės yra `type` parametrų pavadinimai ir nustatytos atitinkamos tipų reikšmės.


## Examples

### Example #1
Raskite funkcijos `(x as number, y as text)` parametrų tipus.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
