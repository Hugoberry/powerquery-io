---
title: Type.ForFunction
---

# Type.ForFunction


Tiek atgriezts tips, kas norāda funkcijas ar konkrētu parametru un atgriež tipa ierobežojumus.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Izveido `function type` no `signature`, `ReturnType` un `Parameters` ierakstu, un `min`, minimālais nepieciešamo argumentu skaits, lai izsauktu funkciju.


## Examples

### Example #1
Izveido tipu funkcijai, kas izmanto skaitļa parametru ar nosaukumu X un atgriež skaitli.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
