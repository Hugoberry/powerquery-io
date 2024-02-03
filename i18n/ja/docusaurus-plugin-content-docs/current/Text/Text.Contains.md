---
title: Text.Contains
---

# Text.Contains


## Description

テキストにサブストリングが含まれているかどうかを示す値を返します。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code> に値 <code>substring</code> が含まれているかどうかを検出します。値が検出された場合は true を返します。この関数は、ワイルドカードまたは正規表現をサポートしません。      <br />      <br />      オプションの引数 <code>comparer</code> を使用して、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行うことができます。      命令文の中で以下の標準で用意された比較関数を使用できます:      <ul>        <li><code>Comparer.Ordinal</code>: 完全一致の順次比較を行います</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 完全一致の順次比較 (大文字小文字を区別しない) を行います</li>        <li> <code>Comparer.FromCulture</code>: カルチャに対応した比較を行います</li>      </ul>


## Examples

### Example #1 
テキスト &#34;Hello World&#34; に &#34;Hello&#34; が含まれているかどうかを調べます。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
テキスト &#34;Hello World&#34; に &#34;hello&#34; が含まれているかどうかを調べます。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
テキスト &#34;Hello World &#34;に &#34;hello &#34;が含まれているかどうかを、大文字小文字を区別しない比較関数を使用して検索します。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
