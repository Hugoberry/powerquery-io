---
title: Type.Is
---

# Type.Is


Anger om ett värde av den första typen alltid är kompatibelt med den andra typen.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Anger om värdet `type1` alltid är kompatibelt med `type2`. Parametern `type2` ska vara ett primitivt (eller nullbart primitivt) typvärde. I annat fall är den här funktionens beteende odefinierat och bör inte förlitas på.


## Examples

### Example #1
Kontrollera om ett värde av typen nummer alltid kan behandlas som typen any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Kontrollera om ett värde av typen any alltid kan behandlas som typen nummer.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
