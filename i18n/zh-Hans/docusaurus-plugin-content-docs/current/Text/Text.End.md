---
title: Text.End
---

# Text.End


返回文本的后几个字符。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

返回一个 `text` 值，该值是 `text` 值 `text` 的后 `count` 个字符。


## Examples

### Example #1
获取文本 "Hello, World" 的后 5 个字符。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
