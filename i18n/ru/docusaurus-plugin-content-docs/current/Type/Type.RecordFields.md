---
title: Type.RecordFields
---

# Type.RecordFields


Возвращает запись, описывающую поля типа записи, причем у каждого поля возвращаемого типа записи есть соответствующее имя и значение.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Возвращает запись, описывающую поля записи <code>type</code>. Каждое поле возвращенного типа записи имеет соответствующее имя и значение в виде записи <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Найти имя и значение записи &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
