---
title: Text.FromBinary
---

# Text.FromBinary


Mã hóa dữ liệu từ dạng nhị phân thành văn bản.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Giải mã dữ liệu từ giá trị nhị phân sang giá trị văn bản bằng cách sử dụng kiểu mã hóa được chỉ định.

-   `binary`: Dữ liệu nhị phân cần giải mã.
-   `encoding`: (Tùy chọn) Kiểu mã hóa được sử dụng để chuyển đổi từ nhị phân sang văn bản. Dùng `BinaryEncoding.Type` để chỉ định loại mã hóa. Nếu không chỉ định, giá trị mặc định sẽ là `BinaryEncoding.Utf8`.


## Examples

### Example #1
Mã hóa văn bản thành dạng nhị phân, tạo chuỗi Base64 có thể xem được, sau đó giải mã ngược lại thành văn bản.
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
Mã hóa văn bản thành dạng nhị phân kèm theo Dấu thứ tự byte (BOM), tạo chuỗi thập lục phân có thể xem được, sau đó giải mã ngược lại thành văn bản.
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
