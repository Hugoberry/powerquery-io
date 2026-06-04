---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Atgriež skaitli, kas norāda minimālo nepieciešamo parametru skaitu, lai izsauktu funkcijas tipu.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Atgriež skaitli, kas norāda minimālo nepieciešamo parametru skaitu, lai izsauktu funkcijas ievadi `type`.


## Examples

### Example #1
Atrodiet funkcijai `(x as number, optional y as text)` nepieciešamo parametru skaitu.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
