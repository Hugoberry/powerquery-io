---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Возвращает запись со значениями полей, в качестве которых указаны имена параметров типа функции, а также их значения, отражающие соответствующие типы.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Возвращает запись со значениями полей, в качестве которых указаны имена параметров `type`, значения которых отражают их соответствующие типы.


## Examples

### Example #1
Найти типы параметров функции `(x как число, y как текст)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
