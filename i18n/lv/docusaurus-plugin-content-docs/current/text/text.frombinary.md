---
title: Text.FromBinary
---

# Text.FromBinary


Dati no bināras formas tiek dekodēti tekstā.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Dekodē datus no binārās vērtības uz teksta vērtību, izmantojot norādīto kodēšanas tipu.

-   `binary`: binārie dati, kas jākodē.
-   `encoding`: (neobligāti) kodējums, kas tiek izmantots, lai bināru formātu pārvērstu par tekstu. Izmantojiet `BinaryEncoding.Type`, lai norādītu kodēšanas tipu. Ja šī vērtība nav norādīta, noklusējuma vērtība ir `BinaryEncoding.Utf8`.


## Examples

### Example #1
Kodējiet tekstu binārā formātā, izveidojiet skatāmu Base64 virkni un pēc tam dekodējiet to atpakaļ uz tekstu.
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
Kodējiet tekstu binārā formātā ar baitu secības atzīmi (BOM), izveidojiet skatāmu heksadecimālu virkni un pēc tam dekodējiet to atpakaļ tekstā.
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
