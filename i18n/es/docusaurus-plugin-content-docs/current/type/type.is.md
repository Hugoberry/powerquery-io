---
title: Type.Is
---

# Type.Is


Determina si un valor del primer tipo siempre es compatible con el segundo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina si un valor de `type1` es siempre compatible con `type2`. El parámetro `type2` debe ser un valor de tipo primitivo (o primitivo que acepte valores NULL). De lo contrario, el comportamiento de esta función no está definido y no se debe confiar en él.


## Examples

### Example #1
Determine si un valor de tipo número siempre se puede tratar como un tipo cualquiera.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determine si un valor de tipo cualquiera siempre se puede tratar como tipo número.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
