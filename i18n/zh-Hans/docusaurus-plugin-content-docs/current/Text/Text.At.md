---
title: Text.At
---

# Text.At


在指定的位置返回该字符。


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

在位置 <code>index</code> 返回文本值中的字符 <code>text</code>。文本中的第一个字符位于位置 0。


## Examples

### Example #1 
查找位于字符串 &#34;Hello, World&#34; 中位置 4 的字符。
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
