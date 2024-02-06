---
title: Text.TrimEnd
---

# Text.TrimEnd


末尾の空白をすべて削除します。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

テキスト値 <code>text</code> から末尾の空白をすべて削除した結果を返します。


## Examples

### Example #1 
&#34;     a b c d    &#34; から末尾の空白を削除します。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
