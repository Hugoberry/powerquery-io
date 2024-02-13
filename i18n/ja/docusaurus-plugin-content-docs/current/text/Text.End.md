---
title: Text.End
---

# Text.End


テキストの最後の文字を返します。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

<code>text</code> 値 <code>text</code> の最後の <code>count</code> 文字である <code>text</code> 値を返します。


## Examples

### Example #1 
テキスト &#34;Hello, World&#34; の最後の 5 文字を取得します。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
