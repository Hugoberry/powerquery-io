---
title: Logical.FromText
---

# Logical.FromText


根據文字值 "true" 和 "false" 建立邏輯值。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

從文字值 `text` 建立邏輯值，可以是 "true" 或 "false"。如果 `text` 包含不同的字串，則引發錯誤。文字值 `text` 不區分大小寫。


## Examples

### Example #1
根據文字字串 "true" 建立邏輯值。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
根據文字字串 "a" 建立邏輯值。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
