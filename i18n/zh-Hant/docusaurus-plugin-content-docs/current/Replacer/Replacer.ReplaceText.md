---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

取代提供之輸入中的文字。


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

以 <code>new</code> 文字取代原始 <code>text</code> 中的 <code>old</code> 文字。這個取代子函數可用於 <code>List.ReplaceValue</code> 和 <code>Table.ReplaceValue</code> 中。


## Examples

### Example #1 
以 &#34;He&#34; 取代字串 &#34;hEllo world&#34; 中的文字 &#34;hE&#34;。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
