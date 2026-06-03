---
title: Type.IsNullable
---

# Type.IsNullable


Returnerar sant om en typ är en nullbar typ; i annat fall returneras falskt.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returnerar `true` om typen är en `nullable` typ; i annat fall returneras `false`.


## Examples

### Example #1
Bestäm om `number` är nullbar.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Bestäm om `type nullable number` är nullbar.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
