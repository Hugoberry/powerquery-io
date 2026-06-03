---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Возвращает число, обозначающее минимальное количество параметров, необходимое для вызова типа функции.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Возвращает число, обозначающее минимальное количество параметров, необходимых для вызова входных данных `type` функции.


## Examples

### Example #1
Найти число необходимых параметров для функции `(x как число, y как текст (дополнительно))`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
