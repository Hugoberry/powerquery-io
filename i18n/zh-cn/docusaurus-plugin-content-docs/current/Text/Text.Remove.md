---
title: Text.Remove
---

# Text.Remove


## Description

从输入字符文本值中删除所出现的所有给定字符或字符列表。


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

返回文本值 <code>text</code> 已删除了 <code>removeChars</code> 的所有字符的副本。 


## Examples

### Example #1 
从文本值中删除字符 , 和 ;。
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
