---
title: Text.EndsWith
---

# Text.EndsWith


## Description

テキストが指定された値で終わるかどうかを示します。


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

与えられたテキスト (<code>text</code>) が指定された値 "<code>substring</code>" で終わるかどうかを示します。表示では大文字と小文字が区別されます。      <div>        <code>comparer</code> は、比較を制御するために使用する <code>Comparer</code> です。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。      </div>      <div>        命令文の中で以下の標準で用意された比較関数を使用できます:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 完全一致の順次比較を行います</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 完全一致の順次比較 (大文字小文字を区別しない) を行います</li>        <li> <code>Comparer.FromCulture</code>: カルチャに対応した比較を行います</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World&#34; が &#34;world&#34; で終わるかどうかを調べます。
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Hello, World&#34; が &#34;World&#34; で終わるかどうかを調べます。
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
