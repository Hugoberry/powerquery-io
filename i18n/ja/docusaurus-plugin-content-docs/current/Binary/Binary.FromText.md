---
title: Binary.FromText
---

# Binary.FromText


## Description

テキスト形式のデータをバイナリにデコードします。


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

テキスト値 <code>text</code> をバイナリ (<code>number</code> のリスト) に変換した結果を返します。テキスト値で使用されているエンコードを示すために、<code>encoding</code> を指定することができます。      <code>encoding</code> には次の <code>BinaryEncoding</code> 値を使用できます。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 エンコード</li>        <li><code>BinaryEncoding.Hex</code>: 16 進数エンコード</li>      </ul>


## Examples

### Example #1 
&#34;1011&#34; をバイナリにデコードします。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
&#34;1011&#34; を 16 進数エンコードのバイナリにデコードします。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
