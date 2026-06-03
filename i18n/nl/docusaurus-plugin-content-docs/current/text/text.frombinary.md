---
title: Text.FromBinary
---

# Text.FromBinary


Decodeert gegevens vanuit een binaire vorm naar tekst.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Decodeert gegevens van een binaire waarde naar een tekstwaarde met het opgegeven coderingstype.

-   `binary`: de binaire gegevens die moeten worden gedecodeerd.
-   `encoding`: (optioneel) de codering die wordt gebruikt om de binaire gegevens naar tekst te converteren. Gebruik `BinaryEncoding.Type` om het type codering aan te geven. Als deze waarde niet is opgegeven, is de standaardwaarde `BinaryEncoding.Utf8`.


## Examples

### Example #1
Codeer tekst naar binair, maak een leesbare Base64-tekenreeks en decodeer deze daarna weer naar tekst.
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
Codeer tekst naar binair met een Byte Order Mark (BOM), maak een leesbare hexadecimale tekenreeks en decodeer deze daarna weer naar tekst.
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
