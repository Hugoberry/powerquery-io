---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

テキスト値 `text` の位置 `offset` から `count` 文字削除し、`text` の同じ位置にテキスト値 `newText` を挿入した結果を返します。


## Examples

### Example #1
テキスト値 "ABGF" の位置 2 の 1 文字を新しいテキスト値 "CDE" に置き換えます。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
