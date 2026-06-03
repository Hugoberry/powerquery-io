---
title: Text.ToBinary
---

# Text.ToBinary


Codiert Text in ein Binärformat.


## Syntax

```powerquery
Text.ToBinary(
    text as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Codiert mithilfe der angegebenen Codierung einen Textwert in einen Binärwert.

-   `text`: Der zu codierende Text.
-   `encoding`: (Optional) Die Codierung, die zum Konvertieren des Texts in einen Binärwert verwendet wird. Verwenden Sie `BinaryEncoding.Type`, um den Codierungstyp anzugeben. Wenn dieser Wert nicht angegeben wird, ist der Standardwert `BinaryEncoding.Utf8`.
-   `includeByteOrderMark`: (Optional) Bestimmt, ob eine Markierung der Bytereihenfolge (BOM) am Anfang der binären Ausgabe eingeschlossen werden soll. Legen Sie dies auf `WAHR` fest, um die BOM automatisch einzufügen, verwenden Sie andernfalls `FALSCH`. Wenn dieser Wert nicht angegeben wird, ist der Standardwert `FALSCH`.


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
