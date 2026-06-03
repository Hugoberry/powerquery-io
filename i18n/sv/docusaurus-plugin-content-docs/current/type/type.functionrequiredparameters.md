---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Returnerar ett nummer som indikerar det minsta antal parametrar som krävs för att anropa den här typen av funktion.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Returnerar ett nummer som indikerar det minsta antal parametrar som krävs för att anropa inmatningen `type` av funktionen.


## Examples

### Example #1
Hitta antalet nödvändiga parametrar för funktionen `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
