---
title: Type.ForFunction
---

# Type.ForFunction


Повертає тип, що представляє функції з певним параметром, а також обмеження типу.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Створює функцію типу `function type` з таких елементів: `signature`, запису `ReturnType` і `Parameters`, а також `min`, мінімальної кількості аргументів для виклику функції.


## Examples

### Example #1
Створює тип функції, яка приймає числовий параметр X і повертає число.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
