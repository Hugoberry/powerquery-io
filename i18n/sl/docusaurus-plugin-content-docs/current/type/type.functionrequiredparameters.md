---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Vrne število, ki predstavlja najmanjše število parametrov, zahtevanih za poziv vrste funkcije.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Vrne število, ki predstavlja najmanjše število parametrov, zahtevanih za poziv vhoda `type` funkcije.


## Examples

### Example #1
Poiščite število zahtevanih parametrov funkcije `(x as number, y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
