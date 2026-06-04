---
title: Type.RecordFields
---

# Type.RecordFields


返回一个记录，描述记录类型的字段，其中返回记录类型的每个字段拥有对应的名称和值。


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

返回描述记录 `type` 的字段的记录。在记录 `[ Type = type, Optional = logical ]` 的格式中，返回的记录类型的每个字段都有对应的名称和值。


## Examples

### Example #1
找到记录 `[ A = number, optional B = any]` 的名称和值。
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
