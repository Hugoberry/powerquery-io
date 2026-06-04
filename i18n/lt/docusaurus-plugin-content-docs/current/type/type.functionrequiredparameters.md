---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Pateikiamas skaičius, nurodantis minimalų skaičių parametrų, reikalingą funkcijos tipui iškviesti.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Pateikiamas skaičius, nurodantis minimalų skaičių parametrų, reikalingą funkcijos įvesčiai `type` iškviesti.


## Examples

### Example #1
Raskite funkcijos `(x as number, optional y as text)` reikalingų parametrų skaičių.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
