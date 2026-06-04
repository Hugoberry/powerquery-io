---
title: Text.ToBinary
---

# Text.ToBinary


Zakóduje text do binárního formátu.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Zakóduje textovou hodnotu do binární hodnoty pomocí zadaného kódování.

-   `text`: Text, který se má zakódovat.
-   `encoding`: (Volitelné) Kódování použité k převodu textu na binární hodnotu. K určení typu kódování použijte `BinaryEncoding.Type`. Pokud tato hodnota není zadaná, výchozí hodnota je `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Volitelné) Určuje, zda má být na začátku binárního výstupu zahrnuta značka pořadí bajtů (BOM). Nastavte na `true` tak, aby automaticky zahrnula značka BOM, jinak `false`. Pokud tato hodnota není zadaná, výchozí hodnota je `false`.


## Examples

### Example #1
Zakódujte text na binární, vytvořte zobrazitelný řetězec Base64 a pak ho dekódujte zpět na text.
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
Zakódujte text do binárního souboru pomocí značky pořadí bajtů (BOM), vytvořte zobrazitelný šestnáctkový řetězec a pak ho dekódujte zpět na text.
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
