---
title: Text.ToBinary
---

# Text.ToBinary


Koodaa tekstin binaarimuotoon.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Koodaa tekstiarvon binaariarvoksi käyttäen määritettyä koodausta.

-   `text`: Koodattava teksti.
-   `encoding`: Tekstin muuntamiseen binaarimuotoon käytettävä koodaus (valinnainen). Määritä koodauksen tyyppi käyttämällä `BinaryEncoding.Type`\-funktiota. Jos tätä arvoa ei määritetä, oletusarvo on `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: Määrittää, sisällytetäänkö Byte Order Mark (BOM) binaaritulosteen alkuun (valinnainen). Aseta arvoksi `true`, jos haluat sisällyttää BOM:n automaattisesti. Muussa tapauksessa aseta arvoksi `false`. Jos tätä arvoa ei määritetä, oletusarvo on `false`.


## Examples

### Example #1
Koodaa teksti binaarimuotoon, tuota tarkasteltava Base64-merkkijono ja pura se takaisin tekstiksi.
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
Koodaa teksti binaarimuotoon BOM:lla (Byte Order Mark), tuota tarkasteltava heksadesimaalimerkkijono ja pura se takaisin tekstimuotoon.
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
