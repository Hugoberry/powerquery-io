---
title: Text.FromBinary
---

# Text.FromBinary


Afkoder data fra et binært format til tekst.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Afkoder data fra en binær værdi til en tekstværdi ved hjælp af den angivne kodningstype.

-   `binary`: De binære data, der skal afkodes.
-   `encoding`: (Valgfrit) Den kodning, der bruges til at konvertere den binære til tekst. Brug `BinaryEncoding.Type` til at angive kodningstypen. Hvis denne værdi ikke er angivet, er standardværdien `BinaryEncoding.Utf8`.


## Examples

### Example #1
Kod tekst til binær, opret en synlig Base64-streng, og afkod den derefter tilbage til tekst.
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
Kod tekst til binær med en Byte Order Mark (BOM), generer en synlig hexadecimal streng, og afkod den derefter tilbage til tekst.
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
