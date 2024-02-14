---
title: Text.PositionOf
---

# Text.PositionOf


値の最初の位置を返します (見つからない場合は -1)。


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

<code>text</code> で見つかったテキスト値 <code>substring</code> の指定された出現位置を返します。    選択可能なパラメーター <code>occurrence</code> を使用すると、返される出現位置 (既定では最初の出現) を指定できます。    <code>substring</code>が見つからなかった場合は -1 を返します。      <div>        <code>comparer</code>は、比較を制御するために使用する <code>Comparer</code> です。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。      </div>      <div>        命令文で以下の標準で用意された比較関数を使用できます。      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 完全一致の順次比較を行います</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 完全一致の順次比較 (大文字小文字を区別しない) を行います</li>        <li> <code>Comparer.FromCulture</code>: カルチャに対応した比較を行います</li>      </ul>


## Examples

### Example #1 
テキスト &#34;Hello, World! Hello, World!&#34; 内での &#34;World&#34; の最初の出現位置を取得します。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
&#34;Hello, World! Hello, World!&#34; 内での &#34;World&#34; の最後の出現位置を取得します。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
