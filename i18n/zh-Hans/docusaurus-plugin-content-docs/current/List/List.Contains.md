---
title: List.Contains
---

# List.Contains


指示列表是否包含值。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

指示列表 <code>list</code> 是否包含值 <code>value</code>。    如果在列表中找到值，则为 true；否则为 false。可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。 


## Examples

### Example #1 
查看列表 \{1, 2, 3, 4, 5} 是否包含 3。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
查看列表 \{1, 2, 3, 4, 5} 是否包含 6。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
