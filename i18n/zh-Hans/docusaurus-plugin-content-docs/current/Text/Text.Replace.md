---
title: Text.Replace
---

# Text.Replace


## Description

替换文本中所有出现的给定子字符串。


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

返回将文本值 <code>text</code> 中所有出现的文本值 <code>old</code> 替换为文本值 <code>new</code> 的结果。此函数区分大小写。


## Examples

### Example #1 
将句子中出现的每个 &#34;the&#34; 替换为 &#34;a&#34;。
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
