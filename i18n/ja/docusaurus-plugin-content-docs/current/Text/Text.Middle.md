---
title: Text.Middle
---

# Text.Middle


## Description

指定の長さまでのサブ文字列を返します。


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

オフセット <code>start</code> で <code>count</code> 文字または <code>text</code> の末尾までを返します。


## Examples

### Example #1 
テキスト &#34;Hello World&#34; のインデックス 6 で始まり 5 文字のサブ文字列を検出します。
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
テキスト &#34;Hello World&#34; のインデックス 6 で始まり末尾までのサブ文字列を検出します。
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
