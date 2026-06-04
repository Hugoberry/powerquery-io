---
title: Text.ToBinary
---

# Text.ToBinary


Mengekodkan teks kepada bentuk perduaan.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Mengekodkan nilai teks ke dalam nilai perduaan menggunakan pengekodan yang ditentukan.

-   `text`: Teks untuk dikodkan.
-   `encoding`: (Pilihan) Pengekodan yang digunakan untuk menukar teks kepada perduaan. Gunakan `BinaryEncoding.Type` untuk menentukan jenis pengekodan. Jika nilai ini tidak ditentukan, nilai lalai ialah `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Pilihan) Menentukan jika Tanda Tertib Bait (BOM) harus disertakan pada permulaan output perduaan. Tetapkan kepada `true` untuk memasukkan BOM secara automatik, jika tidak `false`. Jika nilai ini tidak ditentukan, nilai lalai ialah `false`.


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
