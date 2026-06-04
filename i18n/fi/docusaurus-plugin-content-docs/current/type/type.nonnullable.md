---
title: Type.NonNullable
---

# Type.NonNullable


Palauttaa tyhjäarvoja tukemattoman tyypin tyypistä.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Palauttaa tyypin, joka ei ole `nullable`, kohteesta `type`.


## Examples

### Example #1
Palauttaa kohteen `type nullable number` tyhjäarvoja tukemattoman tyypin.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
