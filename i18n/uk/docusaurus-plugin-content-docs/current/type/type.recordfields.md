---
title: Type.RecordFields
---

# Type.RecordFields


Повертає запис, який описує поля типу запису, причому кожне поле повернутого типу запису має відповідне ім’я та значення.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Повертає запис, який описує поля типу `type` запису. Кожне поле повернутого типу запису має відповідне ім’я та значення у формі запису `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Знайти ім’я та значення запису `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
