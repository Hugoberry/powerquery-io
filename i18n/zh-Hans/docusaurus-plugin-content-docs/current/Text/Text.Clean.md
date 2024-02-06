---
title: Text.Clean
---

# Text.Clean


返回所有控制字符均已删除的文本值。


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

返回 <code>text</code> 的所有控制字符均已删除的文本值。


## Examples

### Example #1 
从文本值中删除换行和其他控制字符。
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
