---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Повертає число, яке вказує мінімальну кількість параметрів, необхідних для виклику типу функції.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Повертає число, яке вказує мінімальну кількість параметрів, необхідних для виклику вводу `type` функції.


## Examples

### Example #1
Знайти кількість необхідних параметрів для функції `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
