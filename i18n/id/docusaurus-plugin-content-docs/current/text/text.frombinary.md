---
title: Text.FromBinary
---

# Text.FromBinary


Mengkodekan data dari format biner ke teks.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Mendekodekan data dari nilai biner ke nilai teks menggunakan tipe pengodean yang ditentukan.

-   `binary`: Data biner yang akan didekodekan.
-   `encoding`: (Opsional) Pengodean yang digunakan untuk mengonversi biner ke teks. Gunakan `BinaryEncoding.Type` untuk menentukan tipe pengodean. Jika nilai ini tidak ditentukan, nilai default-nya adalah `BinaryEncoding.Utf8`.


## Examples

### Example #1
Kodekan teks ke biner, hasilkan string Base64 yang dapat dilihat, lalu dekodekan kembali ke teks.
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
Mengodekan teks ke biner dengan Byte Order Mark (BOM), menghasilkan string heksadesimal yang dapat dilihat, lalu mendekodekannya kembali ke teks.
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
