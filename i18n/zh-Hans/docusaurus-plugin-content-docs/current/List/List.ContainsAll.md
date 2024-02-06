---
title: List.ContainsAll
---

# List.ContainsAll


指示一个列表是否包含另一个列表中的所有值。


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指示列表 <code>list</code> 是否包含另一个列表 <code>values</code> 中的所有值。    如果在列表中找到值，则为 true；否则为 false。可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。


## Examples

### Example #1 
查看列表 \{1, 2, 3, 4, 5} 是否包含 3 和 4。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
查看列表 \{1, 2, 3, 4, 5} 是否包含 5 和 6。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
