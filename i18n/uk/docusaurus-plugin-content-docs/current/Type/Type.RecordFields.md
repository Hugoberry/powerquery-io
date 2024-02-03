---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Повертає запис, який описує поля типу запису, причому кожне поле повернутого типу запису має відповідне ім’я та значення.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Повертає запис, який описує поля типу <code>type</code> запису. Кожне поле повернутого типу запису має відповідне ім’я та значення у формі запису <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Знайти ім’я та значення запису &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
