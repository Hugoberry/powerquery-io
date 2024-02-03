---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Повертає запис зі значеннями полів, установленими на ім’я параметрів типу функції, і їхні значення, установлені на відповідні типи.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Повертає запис зі значеннями полів, установленими на ім’я параметрів <code>type</code>, і їхні значення, установлені на відповідні типи.


## Examples

### Example #1 
Знайти типи параметрів функції &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
