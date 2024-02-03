---
title: Binary.ToText
---

# Binary.ToText


## Description

バイナリ データをテキスト形式にエンコードします。


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

数値のバイナリ リスト <code>binary</code> をテキスト値に変換した結果を返します。必要に応じて、生成されるテキスト値に使用されるエンコードを示すために、<code>encoding</code> を指定することができます。      <code>encoding</code> には次の <code>BinaryEncoding</code> 値を使用できます。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 エンコード</li>        <li><code>BinaryEncoding.Hex</code>: 16 進数エンコード</li>      </ul>



## Category
Binary
