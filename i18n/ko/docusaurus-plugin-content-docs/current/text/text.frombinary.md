---
title: Text.FromBinary
---

# Text.FromBinary


데이터를 이진 형식에서 텍스트로 디코딩합니다.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

지정된 인코딩 형식을 사용하여 이진 값에서 텍스트 값으로 데이터를 디코딩합니다.

-   `binary`: 디코딩할 이진 데이터입니다.
-   `encoding`: (선택 사항) 이진 파일을 텍스트로 변환하는 데 사용되는 인코딩입니다. `BinaryEncoding.Type`을 사용하여 인코딩 유형을 지정합니다. 이 값을 지정하지 않으면 기본값은 `BinaryEncoding.Utf8`입니다.


## Examples

### Example #1
텍스트를 이진으로 인코딩하고, 볼 수 있는 Base64 문자열을 생성한 다음, 텍스트로 다시 디코딩합니다.
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
BOM(바이트 순서 표시)을 사용하여 텍스트를 이진으로 인코딩하고, 볼 수 있는 16진수 문자열을 생성한 다음, 텍스트로 다시 디코딩합니다.
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
