---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Повертає число, яке вказує мінімальну кількість параметрів, необхідних для виклику типу функції.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Повертає число, яке вказує мінімальну кількість параметрів, необхідних для виклику вводу <code>type</code> функції.


## Examples

### Example #1 
Знайти кількість необхідних параметрів для функції &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
