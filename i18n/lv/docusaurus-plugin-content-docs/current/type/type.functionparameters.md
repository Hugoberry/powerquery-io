---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Atgriež ierakstu ar lauku vērtībām, kas iestatītas funkcijas tipa parametru nosaukumam, un to vērtības, kas iestatītas atbilstošajiem tipiem.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Atgriež ierakstu ar lauku vērtībām, kas iestatītas `type` parametru nosaukumam, un to vērtības, kas iestatītas atbilstošajiem tipiem.


## Examples

### Example #1
Atrodiet funkcijas `(x as number, y as text)` parametru tipus.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
