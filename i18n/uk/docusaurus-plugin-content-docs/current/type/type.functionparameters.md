---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Повертає запис зі значеннями полів, установленими на ім’я параметрів типу функції, і їхні значення, установлені на відповідні типи.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Повертає запис зі значеннями полів, установленими на ім’я параметрів `type`, і їхні значення, установлені на відповідні типи.


## Examples

### Example #1
Знайти типи параметрів функції `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
