---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

文字の範囲を削除し、指定された位置に新しい値を挿入します。


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

テキスト値 <code>text</code> の位置 <code>offset</code> から <code>count</code> 文字削除し、<code>text</code> の同じ位置にテキスト値 <code>newText</code> を挿入した結果を返します。


## Examples

### Example #1 
テキスト値 &#34;ABGF&#34; の位置 2 の 1 文字を新しいテキスト値 &#34;CDE&#34; に置き換えます。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
