---
title: List.Distinct
---

# List.Distinct


## Description

返回删除了重复项的值列表。


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

返回包含列表 <code>list</code> 中的所有值且删除了重复项的列表。如果列表为空，则结果为空列表。


## Examples

### Example #1 
从列表 \{1, 1, 2, 3, 3, 3} 中删除重复的项。
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
