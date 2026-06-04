---
title: Type.IsNullable
---

# Type.IsNullable


Atgriež "true", ja tips ir Nullējams. Pretējā gadījumā vērtība ir "false".


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Atgriež `true`, ja tips ir `Nullable`. Pretējā gadījumā vērtība ir `false`.


## Examples

### Example #1
Nosakiet, vai `number` ir Nullējams.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Nosakiet, vai `type Nullable number` ir Nullējams.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
