---
title: Type.IsNullable
---

# Type.IsNullable


Pateikiama reikšmė „true“, jei tipas neapibrėžtas. Kitais atvejais pateikiama „false“.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Pateikiama `true`, jei tipas yra `nullable`; kitais atvejais – `false`.


## Examples

### Example #1
Nustatykite, ar `number` neapibrėžtas.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Nustatykite, ar `type nullable number` neapibrėžtas.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
