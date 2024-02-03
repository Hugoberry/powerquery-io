---
title: Text.ToList
---

# Text.ToList


## Description

从给定的文本值返回字符值列表。


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

从给定的文本值 <code>text</code> 返回字符值列表。


## Examples

### Example #1 
从文本 &#34;Hello World&#34; 创建字符值列表。
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
