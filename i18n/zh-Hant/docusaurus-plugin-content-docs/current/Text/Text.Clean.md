---
title: Text.Clean
---

# Text.Clean


傳回移除所有控制字元的文字值。


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

傳回移除所有控制字元 <code>text</code> 的文字值。


## Examples

### Example #1 
從文字值中移除換行字元以及其他控制字元。
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
