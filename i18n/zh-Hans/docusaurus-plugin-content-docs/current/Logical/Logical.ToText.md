---
title: Logical.ToText
---

# Logical.ToText


给定逻辑值返回文本 "true" 或 "false"。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

从逻辑值 `logicalValue`(`true`或 `false`)创建文本值。如果 `logicalValue` 不是逻辑值，则引发错误。


## Examples

### Example #1
从逻辑 `true` 创建一个文本值。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
