---
title: Text.Start
---

# Text.Start


## Description

返回文本的开头。


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

返回 <code>text</code> 的前 <code>count</code> 个字符作为文本值。


## Examples

### Example #1 
获取 &#34;Hello, World&#34; 的前 5 个字符。
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
