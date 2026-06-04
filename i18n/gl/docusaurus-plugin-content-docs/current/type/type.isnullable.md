---
title: Type.IsNullable
---

# Type.IsNullable


Devolve o valor true se un tipo é anulable, do contrario, é falso.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Devolve `verdadeiro` se un tipo é `anulable`; do contrario, devolve `falso`.


## Examples

### Example #1
Determine se `número` é anulable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determine se `número de tipo anulable` é anulable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
