---
title: Text.ToBinary
---

# Text.ToBinary


Teksts tiek kodēts binārā formā.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Kodē teksta vērtību binārā vērtībā, izmantojot norādīto kodējumu.

-   `text`: teksts, kas jākodē.
-   `encoding`: (neobligāti) kodējums, kas tiek izmantots, lai tekstu pārvērstu binārā formātā. Izmantojiet `BinaryEncoding.Type`, lai norādītu kodēšanas tipu. Ja šī vērtība nav norādīta, noklusējuma vērtība ir `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (neobligāti) nosaka, vai binārās izvades sākumā ir jāiekļauj baitu secības atzīme (BOM). Iestatiet uz `true`, lai automātiski iekļautu BOM, pretējā gadījumā uz `false`. Ja šī vērtība nav norādīta, noklusējuma vērtība ir `false`.


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
