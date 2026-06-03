---
title: List.IsEmpty
---

# List.IsEmpty


如果列表为空，则返回 true。


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

如果列表 `list` 不包含值(长度为 0)，则返回 `true`。如果列表包含值(长度 > 0)，则返回 `false`。


## Examples

### Example #1
查看列表 \{\} 是否为空。
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
查看列表 \{1, 2\} 是否为空。
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
