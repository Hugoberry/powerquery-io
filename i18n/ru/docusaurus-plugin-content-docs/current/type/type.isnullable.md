---
title: Type.IsNullable
---

# Type.IsNullable


Возвращает значение "true", если тип является допускающим значение "null". В противном случае возвращается значение "false".


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Возвращает `true`, если тип является типом `nullable`; в противном случае, возвращается `false`.


## Examples

### Example #1
Определяет, является ли `number` допускающим значение "null".
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Определяет, является ли `type nullable number` допускающим значение "null".
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
