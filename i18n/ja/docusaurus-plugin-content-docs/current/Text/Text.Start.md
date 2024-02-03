---
title: Text.Start
---

# Text.Start


## Description

テキストの先頭を返します。


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

<code>text</code> の最初の <code>count</code> 文字をテキスト値として返します。


## Examples

### Example #1 
&#34;Hello, World&#34; の最初の 5 文字を取得します。
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
