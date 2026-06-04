---
title: Type.NonNullable
---

# Type.NonNullable


Atgriež neNullējamu tipu no tipa.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Atgriež tipu, kas nav `Nullable` tips, no `type`.


## Examples

### Example #1
Atgrieziet `type Nullable number` neNullējamu tipu.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
