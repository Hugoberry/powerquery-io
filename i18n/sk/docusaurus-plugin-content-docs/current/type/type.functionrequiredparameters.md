---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Vráti číslo označujúce minimálny počet parametrov požadovaných na vyvolanie typu funkcie.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Vráti číslo označujúce minimálny počet parametrov požadovaných na vyvolanie vstupu `type` funkcie.


## Examples

### Example #1
Nájdi počet parametrov požadovaných funkciou `(x ako číslo, voliteľne y ako text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
