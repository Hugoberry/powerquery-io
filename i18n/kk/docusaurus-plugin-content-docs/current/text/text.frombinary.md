---
title: Text.FromBinary
---

# Text.FromBinary


Деректерді екілік түрден мәтінге кодсыздандырады.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Көрсетілген кодтау түрін қолданып, екілік мәннен мәтіндік мәнге деректерді декодтайды.

-   `binary`: Декодталатын екілік деректер.
-   `encoding`: (Міндетті емес) Екілік файлды мәтінге түрлендіру үшін қолданылатын кодтау. Кодтау түрін көрсету үшін `BinaryEncoding.Type` тармағын пайдаланыңыз. Егер бұл мән көрсетілмесе, әдепкі мән `BinaryEncoding.Utf8` болады.


## Examples

### Example #1
Мәтінді екілік форматқа кодтап, көрінетін Base64 жолын жасау, содан кейін оны мәтінге қайта декодтау.
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
Мәтінді байт реті белгісімен (BOM) екілік пішімге кодтау, көрінетін он алтылық жолды жасау, содан кейін оны мәтінге қайта кодтау.
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
