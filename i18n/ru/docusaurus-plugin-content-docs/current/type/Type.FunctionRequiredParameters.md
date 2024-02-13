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

Возвращает число, обозначающее минимальное количество параметров, необходимых для вызова входных данных <code>type</code> функции.


## Examples

### Example #1 
Найти число необходимых параметров для функции &lt;code&gt;(x как число, y как текст (дополнительно))&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
