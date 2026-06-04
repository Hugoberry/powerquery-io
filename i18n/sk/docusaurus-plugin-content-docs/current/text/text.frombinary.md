---
title: Text.FromBinary
---

# Text.FromBinary


Dekóduje údaje z binárneho formátu na text.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Dekóduje údaje z binárnej hodnoty na textovú hodnotu pomocou zadaného typu kódovania.

-   `binary`: Binárne údaje, ktoré sa majú dekódovať.
-   `encoding`: (Voliteľné) Kódovanie použité na konverziu binárneho výstupu na text. Na zadanie typu kódovania použite `BinaryEncoding.Type`. Ak táto hodnota nie je zadaná, predvolená hodnota je `BinaryEncoding.Utf8`.


## Examples

### Example #1
Zakódujte text do binárneho výstupu, vytvorte zobraziteľný reťazec Base64 a potom ho dekódujte späť na text.
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
Zakódujte text ako binárny výstup so značkou poradia bajtov (BOM), vytvorte zobraziteľný hexadecimálny reťazec a potom ho dekódujte späť na text.
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
