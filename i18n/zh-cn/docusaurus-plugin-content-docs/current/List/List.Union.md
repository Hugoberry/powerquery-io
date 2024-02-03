---
title: List.Union
---

# List.Union


## Description

返回在输入中找到的列表值的并集。


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

取列表的列表 <code>lists</code>，合并各个列表中的项，然后在输出列表中返回它们。因此，返回的列表包含所有输入列表中的所有项。    此操作维护传统的包语义，因此重复值作为 Union 的一部分匹配。    可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。 


## Examples

### Example #1 
创建列表 \{1..5}、\{2..6}、\{3..7} 的并集。
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
