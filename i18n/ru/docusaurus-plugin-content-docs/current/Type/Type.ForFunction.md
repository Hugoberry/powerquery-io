---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Возвращает тип, представляющий функции с определенными ограничениями на параметры и тип возвращаемого значения.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Создает тип функции <code>function type</code> из <code>signature</code>, запись <code>ReturnType</code> и <code>Parameters</code>, и <code>min</code> - минимальное число аргументов, необходимых для вызова функции.


## Examples

### Example #1 
Создает тип функции, которая принимает числовой параметр X и возвращает число.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
