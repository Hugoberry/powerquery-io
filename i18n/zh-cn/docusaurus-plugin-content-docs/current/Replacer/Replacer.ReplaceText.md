---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

在提供的输入内替换文本。


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

使用 <code>new</code> 文本替换原始 <code>text</code> 中的 <code>old</code> 文本。可以在 <code>List.ReplaceValue</code> 和 <code>Table.ReplaceValue</code> 中使用此替换器函数。


## Examples

### Example #1 
在字符串 &#34;hEllo world&#34; 中使用 &#34;He&#34; 替换文本 &#34;hE&#34;。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
