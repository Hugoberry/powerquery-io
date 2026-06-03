---
title: Type.IsNullable
---

# Type.IsNullable


Returnerer true, hvis typen kan være null. Ellers returneres false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returnerer `true`, hvis typen er `nullable`. Ellers returneres `false`.


## Examples

### Example #1
Bestem, om `number` kan være null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Bestem, om `type nullable number` kan være null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
