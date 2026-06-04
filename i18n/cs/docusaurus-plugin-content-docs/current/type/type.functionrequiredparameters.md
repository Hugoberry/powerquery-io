---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Vrátí číslo určující minimální počet parametrů požadovaných pro vyvolání typu funkce.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Vrátí číslo určující minimální počet parametrů požadovaných pro vyvolání vstupu `type` funkce.


## Examples

### Example #1
Umožňuje najít počet parametrů požadovaných pro funkci `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
