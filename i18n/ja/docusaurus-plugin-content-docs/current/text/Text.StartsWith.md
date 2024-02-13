---
title: Text.StartsWith
---

# Text.StartsWith


テキストが指定された値で始まるかどうかを示します。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

テキスト値 <code>text</code> がテキスト値 <code>substring</code> で始まる場合は true を返します。      <ul>        <li><code>text</code>: <i></i> 被検索 <code>text</code> 値</li>        <li><code>substring</code>: <i></i> <code>substring</code> 内で検索される部分文字列である <code>text</code> 値</li>        <li><code>comparer</code>: <i>[オプション]</i> 比較の制御に使用される <code>Comparer</code>。たとえば、<code>Comparer.OrdinalIgnoreCase</code> を使用して大文字小文字を区別しない検索を実行できます</li>      </ul>      <div>        <code>comparer</code> は、比較を制御するために使用する <code>Comparer</code> です。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。      </div>      <div>        命令文で以下の標準で用意された比較関数を使用できます。      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 完全一致の順次比較を行います</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 完全一致の順次比較 (大文字小文字を区別しない) を行います</li>        <li> <code>Comparer.FromCulture</code>: カルチャに対応した比較を行います</li>      </ul>


## Examples

### Example #1 
テキスト &#34;Hello, World&#34; がテキスト &#34;hello&#34; で始まるかどうかを調べます。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
テキスト &#34;Hello, World&#34; がテキスト &#34;Hello&#34; で始まるかどうかを調べます。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
