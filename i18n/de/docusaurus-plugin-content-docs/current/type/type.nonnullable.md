---
title: Type.NonNullable
---

# Type.NonNullable


Gibt von einem Typ den Typ zurück, der keine NULL-Werte zulässt.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Gibt von `type` den Typ zurück, der keine `NULL-Werte` zulässt.


## Examples

### Example #1
Geben Sie den Typ von `type nullable number` zurück, der keine NULL-Werte zulässt.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
