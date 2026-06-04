---
title: Type.NonNullable
---

# Type.NonNullable


Devolve o tipo non anulable dun tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Devolve o tipo non `anulable` de `type`.


## Examples

### Example #1
Devolver o tipo non anulable do `número de tipo anulable`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
