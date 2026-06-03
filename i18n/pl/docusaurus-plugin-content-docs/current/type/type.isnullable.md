---
title: Type.IsNullable
---

# Type.IsNullable


Zwraca wartość true, jeśli typ może mieć wartość null; w przeciwnym razie zwraca wartość false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Zwraca wartość `true`, jeśli typ to `nullable`; w przeciwnym razie zwraca wartość `false`.


## Examples

### Example #1
Określ, czy element `number` może mieć wartość null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Określ, czy element `type nullable number` może mieć wartość null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
