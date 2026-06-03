---
title: Text.Insert
---

# Text.Insert


テキスト値を指定された位置の別のテキスト値に挿入します。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

位置 `offset` のテキスト値 `text` にテキスト値 `newText` を挿入した結果を返します。位置は 0 から始まります。


## Examples

### Example #1
"ABD" の "B" と "D" の間に "C" を挿入します。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
