---
title: Text.ToBinary
---

# Text.ToBinary


將文字編碼成二進位格式。


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

使用指定的編碼將文字值編碼為二進位值。

-   `text`: 要編碼的文字。
-   `encoding`: (選用) 用於將文字轉換為二進位的編碼。使用 `BinaryEncoding.Type` 來指定編碼類型。如果未指定此值，預設值為 `BinaryEncoding.Utf8`。
-   `includeByteOrderMark`: (選用) 決定是否在二進位輸出的開頭包含位元組順序標記 (BOM)。設定為 `true` 時會自動包含 BOM，否則為 `false`。如果未指定此值，預設值為 `false`。


## Examples

### Example #1
將文字編碼為二進位，產生可檢視的 Base64 字串，然後將其解碼回文字。
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
使用位元組順序標記 (BOM) 將文字編碼為二進位，產生可檢視的十六進位字串，然後將其解碼回文字。
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
