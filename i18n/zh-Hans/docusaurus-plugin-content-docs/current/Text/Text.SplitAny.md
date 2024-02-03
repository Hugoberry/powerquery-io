---
title: Text.SplitAny
---

# Text.SplitAny


## Description

返回基于分隔符中的任何字符拆分的文本值列表。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

返回根据指定的分隔符 <code>separators</code> 中的任意字符拆分文本值 <code>text</code> 而得到的文本值列表。


## Examples

### Example #1 
从文本值 &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; 创建列表。
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
