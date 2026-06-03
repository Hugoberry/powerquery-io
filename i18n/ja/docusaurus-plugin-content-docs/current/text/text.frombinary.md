---
title: Text.FromBinary
---

# Text.FromBinary


バイナリ形式のデータをテキストにデコードします。


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

指定されたエンコード タイプを使用して、バイナリ値からテキスト値にデータをデコードします。

-   `binary`: デコードすべきバイナリ データ。
-   `encoding`: (オプション) バイナリをテキストに変換するために使用されるエンコード。エンコードの種類は、`BinaryEncoding.Type` を使用して指定します。この値を指定しない場合、 `BinaryEncoding.Utf8` が既定値になります。


## Examples

### Example #1
テキストをバイナリにエンコードし、表示可能な Base64 文字列を生成してから、それをテキストにデコードします。
```powerquery
let
    originalText = "Testing 1-2-3",

    // Default UTF-8 binary
    binaryData = Text.ToBinary(originalText),

    // Convert binary to viewable Base64 string
    encodedText = Binary.ToText(binaryData, BinaryEncoding.Base64),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData),

    result = [
        OriginalText = originalText,
        BinaryBase64 = encodedText,
        DecodedText = decodedText
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryBase64 = "VGVzdGluZyAxLTItMw==",
    DecodedText = "Testing 1-2-3"
]
```


### Example #2
バイト順マーク (BOM) を使用してテキストをバイナリにエンコードし、表示可能な 16 進文字列を生成してから、テキストにデコードします。
```powerquery
let
    originalText = "Testing 1-2-3",

    // Convert to binary with BOM
    binaryData = Text.ToBinary(originalText, TextEncoding.Utf16, true),

    // Show binary as hex to demonstrate presence of BOM (fffe)
    binaryAsHex = Binary.ToText(binaryData, BinaryEncoding.Hex),

    // Decode back to text
    decodedText = Text.FromBinary(binaryData, TextEncoding.Utf16),

    // Compare original text and decoded text
    isIdentical = originalText = decodedText,

    result = [
        OriginalText = originalText,
        BinaryHex = binaryAsHex,
        DecodedText = decodedText,
        IsIdentical = isIdentical
    ]
in
    result
```

Result: 
```powerquery
[
    OriginalText = "Testing 1-2-3",
    BinaryHex = "fffe540065007300740069006e006700200031002d0032002d003300",
    DecodedText = "Testing 1-2-3",
    IsIdentical = true
]
```




## Category
Text.Conversions from and to text
