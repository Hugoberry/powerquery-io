---
title: Text.ToBinary
---

# Text.ToBinary


将文本编码为二进制格式。


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

使用指定的编码将文本值编码为二进制值。

-   `text`: 要编码的文本。
-   `encoding`: (可选)用于将文本转换为二进制的编码。使用 `BinaryEncoding.Type` 指定编码类型。如果未指定此值，默认值为 `BinaryEncoding.Utf8`。
-   `includeByteOrderMark`: (可选)确定是否应在二进制输出开头包含字节顺序标记(BOM)。若要自动包含 BOM，请设置为 `true`；否则设置为 `false`。如果未指定此值，默认值为 `false`。


## Examples

### Example #1
将文本编码为二进制，生成可查看的 Base64 字符串，然后将其解码回文本。
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
使用字节顺序标记(BOM)将文本编码为二进制，生成可查看的十六进制字符串，然后将其解码回文本。
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
