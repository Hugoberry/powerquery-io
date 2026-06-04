---
title: Text.ToBinary
---

# Text.ToBinary


Kodira tekst u binarni oblik.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Kodira tekstualnu vrednost u binarnu vrednost pomoću navedenog kodiranja.

-   `text`: Tekst koji treba da se kodira.
-   `encoding`: (Opcionalno) Kodiranje koje se koristi za konvertovanje teksta u binarni. Koristite `BinaryEncoding.Type` da navedete tip kodiranja. Ako ova vrednost nije navedena, podrazumevana vrednost je `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Opcionalno) Određuje da li Byte Order Mark (BOM) treba da bude uključena na početku binarnog izlaza. Podesite na `true` da automatski uključite BOM, u suprotnom na `false`. Ako ova vrednost nije navedena, podrazumevana vrednost je `false`.


## Examples

### Example #1
Kodirajte tekst u binarni format, napravite vidljivu Base64 nisku, a zatim je dekodirajte nazad u tekst.
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
Kodirajte tekst u binarni format sa oznakom za redosled bajtova (BOM), napravite vidljivu heksadecimalnu nisku, a zatim je dekodirajte nazad u tekst.
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
