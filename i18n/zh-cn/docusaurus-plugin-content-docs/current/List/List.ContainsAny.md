---
title: List.ContainsAny
---

# List.ContainsAny


## Description

指示一个列表是否包含另一个列表中的任意值。


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

指示列表 <code>list</code> 是否包含另一个列表 <code>values</code> 中的任意值。       如果在列表中找到值，则为 true；否则为 false。可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。


## Examples

### Example #1 
查看列表 \{1, 2, 3, 4, 5} 是否包含 3 或 9。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
查看列表 \{1, 2, 3, 4, 5} 是否包含 6 或 7。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
