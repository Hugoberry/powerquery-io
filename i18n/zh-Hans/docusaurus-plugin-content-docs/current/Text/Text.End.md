---
title: Text.End
---

# Text.End


## Description

返回文本的后几个字符。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

返回一个 <code>text</code> 值，该值是 <code>text</code> 值 <code>text</code> 的后 <code>count</code> 个字符。


## Examples

### Example #1 
获取文本 &#34;Hello, World&#34; 的后 5 个字符。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
