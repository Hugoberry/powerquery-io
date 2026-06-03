---
title: Text.FromBinary
---

# Text.FromBinary


Decodiert Daten aus einem Binärformat in Text.


## Syntax

```powerquery
Text.FromBinary(
    binary as binary,
    optional encoding as TextEncoding.Type
) as text
```


## Remarks

Decodiert Daten mithilfe des angegebenen Codierungstyps aus einem Binärwert in einen Textwert.

-   `binary`: Die binären Daten, die decodiert werden sollen.
-   `encoding`: (Optional) Die Codierung, die zum Konvertieren des Binärwerts in Text verwendet wird. Verwenden Sie `BinaryEncoding.Type`, um den Codierungstyp anzugeben. Wenn dieser Wert nicht angegeben wird, ist der Standardwert `BinaryEncoding.Utf8`.


## Examples

### Example #1
Codieren Sie Text in einen Binärdaten, erzeugen Sie eine anzeigbare Base64-Zeichenfolge, und decodieren Sie sie dann wieder in Text.
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
Codieren Sie Text mit einer Markierung der Bytereihenfolge (BOM) in Binärdaten, erzeugen Sie eine anzeigbare hexadezimale Zeichenfolge, und decodieren Sie sie dann wieder in Text.
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
