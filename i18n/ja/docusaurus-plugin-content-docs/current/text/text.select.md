---
title: Text.Select
---

# Text.Select


入力テキスト値に出現する指定された文字または一連の文字をすべて選択します。


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

`selectChars` に含まれていないすべての文字を削除したうえで、テキスト値 `text` のコピーを返します。


## Examples

### Example #1
テキスト値から 'a' から 'z' の範囲のすべての文字を選択します。
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
