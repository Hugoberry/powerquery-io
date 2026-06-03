---
title: Text.ToBinary
---

# Text.ToBinary


เข้ารหัสข้อความให้เป็นรูปแบบไบนารี


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

เข้ารหัสค่าข้อความเป็นค่าไบนารีโดยใช้การเข้ารหัสที่ระบุ

-   `text`: ข้อความที่จะเข้ารหัส
-   `encoding`: (ระบุหรือไม่ก็ได้) การเข้ารหัสที่ใช้แปลงข้อความเป็นไบนารี ใช้ `BinaryEncoding.Type` เพื่อระบุชนิดของการเข้ารหัส ถ้าไม่ได้ระบุค่านี้ ค่าเริ่มต้นคือ `BinaryEncoding.Utf8`
-   `includeByteOrderMark`: (ไม่บังคับ) กำหนดว่าควรรวม Byte Order Mark (BOM) ที่จุดเริ่มต้นของเอาต์พุตไบนารีหรือไม่ ตั้งค่าเป็น `true` ให้ใส่รหัส BOM โดยอัตโนมัติ มิฉะนั้น `false` ถ้าไม่ได้ระบุค่านี้ ค่าเริ่มต้นคือ `false`


## Examples

### Example #1
เข้ารหัสข้อความเป็นไบนารี สร้างสตริง Base64 ที่สามารถดูได้ แล้วถอดรหัสกลับเป็นข้อความ
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
เข้ารหัสข้อความเป็นไบนารีด้วย Byte Order Mark (BOM) สร้างสตริงเลขฐานสิบหกที่สามารถดูได้ แล้วถอดรหัสกลับเป็นข้อความ
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
