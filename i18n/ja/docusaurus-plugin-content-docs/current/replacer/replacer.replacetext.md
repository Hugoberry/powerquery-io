---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


指定された入力内のテキストを置き換えます。


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

元の <code>text</code> 内の <code>old</code> テキストを <code>new</code> テキストに置き換えます。この置換関数は、<code>List.ReplaceValue</code> および <code>Table.ReplaceValue</code> で使用できます。


## Examples

### Example #1 
文字列 &#34;hEllo world&#34; 内のテキスト &#34;hE&#34; を &#34;He&#34; に置き換えます。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
