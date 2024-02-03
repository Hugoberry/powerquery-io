---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

删除所有尾随空格。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

返回从文本值 <code>text</code> 删除所有尾随空格的结果。


## Examples

### Example #1 
从 &#34;     a b c d    &#34; 删除尾随空格。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
