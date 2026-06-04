---
title: Text.ToBinary
---

# Text.ToBinary


Kodira besedilo v dvojiško obliko.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Kodira navedeno besedilno vrednost v dvojiško vrednost z navedenim kodiranjem.

-   `text`: besedilo, ki ga je treba kodirati.
-   `encoding`: (neobvezen) kodiranje, uporabljeno za pretvorbo besedila v dvojiško vrednost. Uporabite `BinaryEncoding.Type`, da določite vrsto kodiranja. Če ta vrednost ni določena, je privzeta vrednost `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (izbirno) določa, ali je treba na začetek dvojiškega rezultata dodati oznako za vrstni red bajtov (BOM). Nastavite na `true`, če želite samodejno dodati BOM, v nasprotnem primeru pa nastavite na `false`. Če ta vrednost ni navedena, je privzeta vrednost `false`.


## Examples

### Example #1
Kodirajte besedilo v dvojiško vrednost, ustvarite berljiv niz Base64 in ga nato znova dekodirajte v besedilo.
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
Kodirajte besedilo v dvojiško vrednost z oznako vrstnega reda bajtov (BOM), ustvarite berljiv šestnajstiški niz in ga nato znova dekodirajte v besedilo.
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
