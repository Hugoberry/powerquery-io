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

Determina si un valor de <code>type1</code> es siempre compatible con <code>type2</code>.


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
