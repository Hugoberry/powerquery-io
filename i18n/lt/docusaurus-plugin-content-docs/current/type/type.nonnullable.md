---
title: Type.NonNullable
---

# Type.NonNullable


Pateikiamas ne neapibrėžtas tipas iš tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Pateikiamas `nullable` tipas iš `type`.


## Examples

### Example #1
Pateikiamas ne neapibrėžtas `type nullable number` tipas.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
