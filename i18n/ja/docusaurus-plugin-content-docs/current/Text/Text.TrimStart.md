---
title: Text.TrimStart
---

# Text.TrimStart


## Description

先頭の空白をすべて削除します。


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

テキスト値 <code>text</code> から先頭の空白をすべて削除した結果を返します。


## Examples

### Example #1 
&#34;     a b c d    &#34; から先頭の空白を削除します。
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
