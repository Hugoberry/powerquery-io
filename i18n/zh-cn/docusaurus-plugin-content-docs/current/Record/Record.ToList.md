---
title: Record.ToList
---

# Record.ToList


## Description

返回包含输入记录字段值的值列表。


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

返回包含输入 <code>record</code> 中的字段值的值列表。


## Examples

### Example #1 
从记录提取字段值。
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
