---
title: Text.Select
---

# Text.Select


## Description

入力テキスト値に出現する指定された文字または一連の文字をすべて選択します。


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

<code>selectChars</code> に含まれていないすべての文字を削除したうえで、テキスト値 <code>text</code> のコピーを返します。


## Examples

### Example #1 
テキスト値から &#39;a&#39; から &#39;z&#39; の範囲のすべての文字を選択します。
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
