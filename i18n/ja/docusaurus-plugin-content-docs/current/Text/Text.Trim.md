---
title: Text.Trim
---

# Text.Trim


## Description

先頭と末尾の空白をすべて削除します。


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

テキスト値 <code>text</code> から先頭と末尾の空白をすべて削除した結果を返します。


## Examples

### Example #1 
&#34;     a b c d    &#34; から先頭と末尾の空白を削除します。
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
