---
title: Type.IsNullable
---

# Type.IsNullable


Devolve verdadeiro se um tipo é um tipo nulo; caso contrário, falso.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Devolve `true` se um tipo for do tipo `nulllable`; caso contrário, `false`.


## Examples

### Example #1
Determinar se `number` é nulo.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determinar se `type nullable number` é nulo.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
