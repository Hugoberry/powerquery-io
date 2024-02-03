---
title: Text.Range
---

# Text.Range


## Description

オフセットで見つかったサブストリングを返します。


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

テキスト <code>text</code> のオフセット <code>offset</code> で見つかるサブストリングを返します。    省略可能なパラメーター <code>count</code> を使用すると、返す文字数を指定できます。文字数が足りない場合はエラーがスローされます。


## Examples

### Example #1 
インデックス 6 で始まるテキスト &#34;Hello World&#34; のサブストリングを調べます。
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
インデックス 6 で始まり、全部で 5 文字になるテキスト &#34;Hello World&#34; のサブストリングを調べます。
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
