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

元の `text` 内の `old` テキストを `new` テキストに置き換えます。この置換関数は、`List.ReplaceValue` および `Table.ReplaceValue` で使用できます。


## Examples

### Example #1
文字列 "hEllo world" 内のテキスト "hE" を "He" に置き換えます。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
