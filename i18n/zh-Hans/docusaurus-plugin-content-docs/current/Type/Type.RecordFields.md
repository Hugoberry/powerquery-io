---
title: Type.RecordFields
---

# Type.RecordFields


## Description

返回一个记录，描述记录类型的字段，其中返回记录类型的每个字段拥有对应的名称和值。


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

返回描述记录 <code>type</code> 的字段的记录。在记录 <code>[ Type = type, Optional = logical ]</code> 的格式中，返回的记录类型的每个字段都有对应的名称和值。


## Examples

### Example #1 
找到记录 &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; 的名称和值。
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
