---
title: Text.Select
---

# Text.Select


从输入字符文本值中选择出现的所有给定字符或字符列表。


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

返回文本值 <code>text</code> 已删除了不在 <code>selectChars</code> 中的所有字符的副本。 


## Examples

### Example #1 
从文本值中选择范围从 &#34;a&#34; 到 &#34;z&#34; 的所有字符。
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
