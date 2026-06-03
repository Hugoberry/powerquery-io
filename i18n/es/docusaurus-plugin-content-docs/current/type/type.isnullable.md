---
title: Type.IsNullable
---

# Type.IsNullable


Devuelve true si un tipo es de un tipo que acepta valores NULL; de lo contrario, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Devuelve `true` si un tipo es de tipo `nullable`; de lo contrario, `false`.


## Examples

### Example #1
Determinar si `number` acepta valores NULL.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determinar si `type nullable number` acepta valores NULL.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
