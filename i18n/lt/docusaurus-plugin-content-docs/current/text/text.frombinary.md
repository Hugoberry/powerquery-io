---
title: Text.FromBinary
---

# Text.FromBinary


Duomenys dekoduojami iš dvejetainės formos į tekstą.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Duomenys dekoduojami iš dvejetainės reikšmės į tekstinę reikšmę naudojant nurodytą kodavimo tipą.

-   `binary`: dvejetainiai duomenys, kuriuos reikia dekoduoti.
-   `encoding`: (Pasirinktinai) Kodavimas, naudojamas konvertuojant dvejetainį į tekstą. Naudokite `BinaryEncoding.Type`, kad nurodytumėte kodavimo tipą. Jei ši reikšmė nenurodyta, numatytoji reikšmė yra `BinaryEncoding.Utf8`.


## Examples

### Example #1
Užkoduokite tekstą į dvejetainį formatą, sukurkite matomą Base64 eilutę, tada dekoduokite ją atgal į tekstą.
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
Užkoduokite tekstą į dvejetainį formatą su baitų eilės žyme (BOM), sukurkite matomą šešioliktainę eilutę, tada dekoduokite ją atgal į tekstą.
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
