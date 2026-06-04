---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Vrne zapis z vrednostmi polj, nastavljenimi na imena parametrov vrste funkcije, in njihovimi vrednostmi, nastavljenimi na ustrezne vrste.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Vrne zapis z vrednostmi polj, nastavljenimi na ime parametrov `type`, in njihovimi vrednostmi, nastavljenimi na ustrezne vrste.


## Examples

### Example #1
Poiščite vrste parametrov funkcije `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
