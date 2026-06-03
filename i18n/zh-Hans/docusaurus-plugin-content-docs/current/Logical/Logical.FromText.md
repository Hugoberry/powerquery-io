---
title: Logical.FromText
---

# Logical.FromText


从文本值 "true" 和 "false" 创建逻辑值。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

从文本值 `text`("true" 或 "false")创建逻辑值。如果 `text` 包含其他字符串，则引发错误。文本值 `text` 不区分大小写。


## Examples

### Example #1
从文本字符串 "true" 创建逻辑值。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
从文本字符串 "a" 创建逻辑值。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
