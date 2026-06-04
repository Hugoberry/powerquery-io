---
title: Text.FromBinary
---

# Text.FromBinary


Menyahkodkan data daripada bentuk perduaan kepada teks.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Menyahkodkan data daripada nilai perduaan kepada nilai teks menggunakan jenis pengekodan yang ditentukan.

-   `binary`: Data perduaan untuk dinyahkod.
-   `encoding`: (Pilihan) Pengekodan yang digunakan untuk menukar perduaan kepada teks. Gunakan `BinaryEncoding.Type` untuk menentukan jenis pengekodan. Jika nilai ini tidak ditentukan, nilai lalai ialah `BinaryEncoding.Utf8`.


## Examples

### Example #1
Kodkan teks kepada perduaan, hasilkan rentetan Base64 yang boleh dilihat, kemudian nyahkodkannya kembali kepada teks.
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
Kodkan teks kepada perduaan dengan Tanda Susunan Bait (BOM), hasilkan rentetan heksadesimal yang boleh dilihat, kemudian nyahkodkannya kembali kepada teks.
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
