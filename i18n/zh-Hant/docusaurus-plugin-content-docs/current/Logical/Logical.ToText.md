---
title: Logical.ToText
---

# Logical.ToText


已知邏輯值，傳回文字 "true" 或 "false"。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

從邏輯值 `logicalValue` 建立文字值，可以是 `true` 或 `false`。如果 `logicalValue` 不是邏輯值，則引發錯誤。


## Examples

### Example #1
根據邏輯 `true` 建立文字值。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
