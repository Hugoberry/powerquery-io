---
title: List.MatchesAll
---

# List.MatchesAll


如果列表中的所有值均满足条件函数，则返回 true。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

如果列表 <code>list</code> 中的所有值均满足条件函数 <code>condition</code>，则返回 <code>true</code>；否则返回 <code>false</code>。


## Examples

### Example #1 
确定列表 \{11, 12, 13} 中的所有值是否大于 10。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
确定列表 \{1, 2, 3} 中的所有值是否大于 10。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
